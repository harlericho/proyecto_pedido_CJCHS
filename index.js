const app = require("./app/app");

app.listen(app.get("port"), () => {
  console.log(
    "🌎 ~ host: Servidor iniciado en: => http://127.0.0.1:" + app.get("port")
  );
});
