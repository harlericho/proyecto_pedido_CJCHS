const app = new (function () {
  this.tbody = document.getElementById("tbody");
  this.id = document.getElementById("id");
  this.dni = document.getElementById("dni");
  this.nombres = document.getElementById("nombres");
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
  this.guardar = () => {
    const form = new FormData(document.getElementById("formularioCliente"));
    const info = {
      dni: form.get("dni"),
      nombres: form.get("nombres"),
    };
    if (this.id.value == "") {
      fetch("/api/clientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      })
        .then((response) => response.json())
        .then((data) => {
          this.listado();
          this.limpiar();
          // alert(data);
          Swal.fire("Bien!", data, "success");
        })
        .catch((error) => console.error(error));
    }
  };
  this.limpiar = () => {
    document.getElementById("formularioCliente").reset();
    this.dni.focus();
  };
})();
app.listado();
