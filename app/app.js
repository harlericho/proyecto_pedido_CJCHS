const express = require("express");
const morgan = require("morgan");
const path = require("path");
const dotenv = require("dotenv");
const favicon = require("serve-favicon");

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// Agsinamos una variable al numeor del puerto
app.set("port", port);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares de la app
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(favicon(path.join("public", "/img/favicon.ico")));

// ruta iniciales de la vista
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/cliente", (req, res) => {
  res.render("cliente");
});

// rutas de controladores de la app
const router = require("./api");
app.use(router);

// ruta de error 404 página no encontrada
app.use("/", (req, res) => {
  res.status(404).render("404");
});
// Exportamos el modulo
module.exports = app;
