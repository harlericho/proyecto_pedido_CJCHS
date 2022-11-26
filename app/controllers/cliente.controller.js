const connection = require("../config/connection");

const clientes = async (req, res) => {
  try {
    const sql = "SELECT * FROM cliente";
    await connection.query(sql, (error, data) => {
      if (error) throw error;
      res.json(data);
    });
  } catch (error) {
    console.log(
      "❌ ~ file: cliente.controller.js ~ line 12 ~ clientes ~ error",
      error
    );
  }
};

const clienteGuardar = async (req, res) => {
  try {
    const cliente = req.body;
    const sql = "INSERT INTO cliente SET ?";
    await connection.query(sql, cliente, (error, data) => {
      if (error) throw error;
      res.json("Creado..!");
    });
  } catch (error) {
    console.log(
      "❌ ~ file: cliente.controller.js ~ line 28 ~ clientes ~ error",
      error
    );
  }
};
module.exports = {
  clientes,
  clienteGuardar,
};
