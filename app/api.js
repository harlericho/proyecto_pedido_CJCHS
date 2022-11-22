const router = require("express").Router();
const routerPedidos = require("./routes/pedido.routes");
const routerClientes = require("./routes/cliente.routes");

router.use("/api/pedidos", routerPedidos);
router.use("/api/clientes", routerClientes);

module.exports = router;
