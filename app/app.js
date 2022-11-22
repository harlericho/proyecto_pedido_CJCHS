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

// ruta inicial de la vista
app.get("/", (req, res) => {
  res.render("index");
});

// rutas de pedidos
const router = require("./api");
app.use(router);

// Exportamos el modulo
module.exports = app;