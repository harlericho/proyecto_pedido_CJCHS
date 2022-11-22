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

module.exports = {
  clientes,
};
