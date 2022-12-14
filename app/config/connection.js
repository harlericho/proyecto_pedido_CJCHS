const mysql = require("mysql");
const config = require("../config");
const connection = mysql.createConnection({
  // host: process.env.DB_HOST,
  // port: process.env.DB_PORT,
  // user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB_SCHEMA,
  host: config.host,
  port: config.port,
  user: config.user,
  password: config.password,
  database: config.database,
});

connection.connect((error) => {
  if (error) throw error;
  console.log("📥 ~ db: Base de datos conectado..!");
});

module.exports = connection;
