const router = require("express").Router();
const clientes = require("../controllers/cliente.controller");
router.get("/", clientes.clientes);
router.post("/", clientes.clienteGuardar);
module.exports = router;
