const app = new (function () {
  this.id = document.getElementById("id");
  this.codigo = document.getElementById("codigo");
  this.fecha = document.getElementById("fecha");
  this.tbody = document.getElementById("tbody");
  this.selector = document.getElementById("selector");
  this.listado = () => {
    fetch("/api/pedidos")
      .then((response) => response.json())
      .then((data) => {
        this.tbody.innerHTML = "";
        if (data.length !== 0) {
          data.forEach((element) => {
            this.tbody.innerHTML += `
              <tr>
                  <td>${element.codigo}</td>
                  <td>${new Date(element.fecha).toLocaleDateString()}</td>
                  <td>${element.nombres}</td>
                  <td>
                      <button class="btn btn-danger btn-sm" onclick="app.eliminar('${
                        element.id
                      }')">Delete</button>
                      <button class="btn btn-info text-white btn-sm" onclick="app.editar('${
                        element.id
                      }')">Edit</button>
                  </td>
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
    const form = new FormData(document.getElementById("formularioPedido"));
    // const json = Array.from(form.entries()).reduce(
    //   (memo, [key, value]) => ({
    //     ...memo,
    //     [key]: value,
    //   }),
    //   {}
    // );
    const info = {
      codigo: form.get("codigo"),
      fecha: form.get("fecha"),
      id_pedido_cliente: form.get("id_pedido_cliente"),
    };
    if (form.get("id_pedido_cliente") == null) {
      return alert("Seleccione un cliente..!");
    }
    if (this.id.value == "") {
      fetch("/api/pedidos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      })
        .then((response) => response.json())
        .then((data) => {
          this.listado();
          alert(data);
          this.limpiar();
        })
        .catch((error) => console.error(error));
    } else {
      fetch("/api/pedidos/" + this.id.value, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      })
        .then((response) => response.json())
        .then((data) => {
          this.listado();
          alert(data);
          this.limpiar();
        })
        .catch((error) => console.error(error));
    }
  };
  this.editar = (id) => {
    fetch("/api/pedidos/" + id, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        var fecha = new Date(data.fecha).toLocaleDateString();
        fecha = fecha.split("/");
        fecha = fecha[2] + "-" + fecha[0] + "-" + fecha[1];
        // console.log(fecha);
        this.id.value = data.id;
        this.codigo.value = data.codigo;
        this.fecha.value = fecha;
        document.getElementById("id_pedido_cliente").value =
          data.id_pedido_cliente;
        this.codigo.focus;
      })
      .catch((err) => console.log(err));
  };

  this.eliminar = (id) => {
    if (confirm("¿Desea eliminar este registro?")) {
      fetch("/api/pedidos/" + id, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          this.listado();
          alert(data);
        })
        .catch((err) => console.log(err));
    }
  };
  this.limpiar = () => {
    document.getElementById("formularioPedido").reset();
    document.getElementById("id_pedido_cliente").focus();
  };

  this.cliente = () => {
    fetch("/api/clientes")
      .then((response) => response.json())
      .then((data) => {
        html =
          "  <select class='form-select' id='id_pedido_cliente' name='id_pedido_cliente' autofocus required>";
        html +=
          "<option disabled='selected' selected='selected'>Seleccione</option>";
        data.forEach((element) => {
          html +=
            "<option value='" +
            element.id +
            "'>" +
            element.nombres +
            "</option>";
        });
        html += "</select>";
        this.selector.innerHTML += html;
      })
      .catch((error) => console.error(error));
  };
})();
app.listado();
app.cliente();
