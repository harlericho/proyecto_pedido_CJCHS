const router = require("express").Router();
const clientes = require("../controllers/cliente.controller");
router.get("/", clientes.clientes);
module.exports = router;
