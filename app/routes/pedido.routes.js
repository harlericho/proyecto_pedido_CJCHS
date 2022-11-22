const router = require("express").Router();
const pedidos = require("../controllers/pedido.controller");
router.get("/", pedidos.pedidos);
router.get("/:id", pedidos.pedidoId);
router.post("/", pedidos.pedidoGuardar);
router.put("/:id", pedidos.pedidoActualizar);
router.delete("/:id", pedidos.pedidoEliminar);

module.exports = router;
