const connection = require("../config/connection");

const pedidos = async (req, res) => {
  try {
    const sql =
      // "SELECT p.id,p.fecha,p.codigo,c.nombres FROM pedido p JOIN cliente c ON p.id_pedido_cliente=c.id";
      "CALL sp_listado()";
    await connection.query(sql, (error, data) => {
      if (error) throw error;
      res.json(data[0]);
    });
  } catch (error) {
    console.log(
      "❌ ~ file: pedido.controller.js ~ line 12 ~ pedidos ~ error",
      error
    );
  }
};
const pedidoId = async (req, res) => {
  try {
    const id = req.params.id;
    const sql =
      // "SELECT * FROM pedido WHERE id=?";
      "CALL sp_listar(?)";
    await connection.query(sql, [id], (error, data) => {
      if (error) throw error;
      res.json(data[0]);
    });
  } catch (error) {
    console.log(
      "❌ ~ file: pedido.controller.js ~ line 27 ~ pedidoId ~ error",
      error
    );
  }
};
const pedidoGuardar = async (req, res) => {
  try {
    const pedido = req.body;
    const sql =
      // "INSERT INTO pedido SET ?";
      "CALL sp_crear(?,?,?)";
    await connection.query(
      sql,
      [pedido.codigo, pedido.fecha, pedido.id_pedido_cliente],
      (error, data) => {
        if (error) throw error;
        res.json("Creado..!");
      }
    );
  } catch (error) {
    console.log(
      "❌ ~ file: pedido.controller.js ~ line 42 ~ pedidoGuardar ~ error",
      error
    );
  }
};
const pedidoActualizar = async (req, res) => {
  try {
    const pedido = req.body;
    const id = req.params.id;
    const sql =
      // "UPDATE pedido SET ? WHERE id=?";
      "CALL sp_actualizar(?,?,?,?)";
    await connection.query(
      sql,
      [pedido.codigo, pedido.fecha, pedido.id_pedido_cliente, id],
      (error, data) => {
        if (error) throw error;
        res.json("Actualizado..!");
      }
    );
  } catch (error) {
    console.log(
      "❌ ~ file: pedido.controller.js ~ line 58 ~ pedidoActualizar ~ error",
      error
    );
  }
};
const pedidoEliminar = async (req, res) => {
  try {
    const id = req.params.id;
    const sql =
      // "DELETE FROM pedido where id=?";
      "CALL sp_eliminar(?)";
    await connection.query(sql, [id], (error, data) => {
      if (error) throw error;
      res.json("Eliminado..!");
    });
  } catch (error) {
    console.log(
      "❌ ~ file: pedido.controller.js ~ line 72 ~ pedidoEliminar ~ error",
      error
    );
  }
};
module.exports = {
  pedidos,
  pedidoId,
  pedidoGuardar,
  pedidoActualizar,
  pedidoEliminar,
};
