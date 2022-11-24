const app = new (function () {
  this.tbody = document.getElementById("tbody");
  this.listado = () => {
    fetch("/api/clientes")
      .then((response) => response.json())
      .then((data) => {
        this.tbody.innerHTML = "";
        if (data.length !== 0) {
          data.forEach((element) => {
            this.tbody.innerHTML += `
              <tr>
                  <td>${element.dni}</td>
                  <td>${element.nombres}</td>
              </tr>
          `;
          });
        } else {
          this.tbody.innerHTML += `
              <tr>
                  <td colspan="4" align="center">No hay datos</td>
              </tr>
          `;
        }
      })
      .catch((error) => console.error(error));
  };
})();
app.listado();
