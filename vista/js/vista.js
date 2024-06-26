class Vista {
  constructor() {}

  mostrarModal(data, msj) {
    document.getElementById("modal-data").innerHTML = data;
    document.getElementById("modal-cuerpo").innerHTML = msj;
    $("#modal-1").modal(); // muestra la ventana modal
  }

  mostrarPlantilla(form, destino) {
    //limpia el contenido
    let dest = document.getElementById(destino);
    dest.innerHTML = "";
    let template = document.getElementById(form);
    if (template) {
      let clon = template.content.cloneNode(true);
      dest.appendChild(clon); //inserta
    }
  }

  limpiarArea(idArea) {
    document.getElementById(idArea).innerHTML = "";
  }

  /**
   * Lee el contenido de los inputs dentro de una etiqueta <form>
   * valida que existan datos en todos los campos
   * Los devuelve como un objeto al que incluye una bandera que indica si los datos son válidos
   * y un mensaje de error si no se ingresaron datos
   * @param {str} formulario: id del formulario a leer
   * @returns {obj} data: objeto con los datos del formulario
   */
  getForm(formulario) {
    let form = document.getElementById(formulario);
    let datos = new FormData(form);
    let data = {};
    data.ok = true; //Bandera para indicar si los datos son válidos
    data.msj = ""; //Mensaje de error si no se ingresaron datos
    datos.forEach((value, key) => {
      data[key] = value;
      if (value == "" || (form[key].tagName === "SELECT" && value == "0")) {
        data.ok = false;
        data.msj = "Ingrese datos en " + key;
        this.mostrarMensaje(false, data.msj);
      }

      if (form[key].type == "email") {
        if (!this.validateEmail(value)) {
          data.ok = false;
          data.msj = "No es un correo válido: " + value;
          this.mostrarMensaje(false, data.msj);
        }
      }
    });

    return data;
  }

  validateEmail(email) {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  /**
   * Despliega un mensaje de error por tres segundos
   * @param {bool} ok: bandera que indica si el mensaje es de error o de éxito
   * @param {str} mensaje: texto del mensaje a desplegar
   */
  mostrarMensaje(ok, mensaje) {
    // Crear el elemento del mensaje
    let mensajeDiv = document.createElement("div");
    mensajeDiv.textContent = mensaje;
    mensajeDiv.id = "mensaje-error";
    mensajeDiv.style.position = "absolute";
    mensajeDiv.style.width = "80%";
    mensajeDiv.style.right = "10%";
    mensajeDiv.style.bottom = "20%";
    if (ok) {
      mensajeDiv.style.backgroundColor = "green";
    } else {
      mensajeDiv.style.backgroundColor = "red";
    }
    mensajeDiv.style.color = "white";
    mensajeDiv.style.textAlign = "center";
    mensajeDiv.style.padding = "10px";
    mensajeDiv.style.borderRadius = "10px";

    // Mostrar el mensaje
    document.getElementById("areaDeTrabajo").appendChild(mensajeDiv);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
      mensajeDiv.remove();
    }, 3000);
  }

  setForm(formulario, data) {
    let form = document.getElementById(formulario);
    for (let key in data) {
      form[key].value = data[key];
    }
  }

  /**
   * Metodo para añadir opciones en un select
   *
   * @param {*} opciones: opciones para añadir al select que devuelve select como listo
   * @param {*} selectName: nombre del select al que se le añadiran las opciones
   * @param {*} nombre_llave: nombre de las llaves de las opciones
   * @param {*} nombre_valor: nombre del valor de las opciones
   * @memberof Vista
   */

  insertar_opciones_select(opciones, select_name, nombre_llave, nombre_valor) {
    const select = document.getElementById(select_name);

    if (select) {
      //array1.forEach((element) =>
      opciones.forEach((elemento) => {
        const option = document.createElement("option");
        option.value = elemento[nombre_llave];
        option.textContent = elemento[nombre_valor];
        select.appendChild(option);
      });
    } else {
      console.error("El contenedor especificado no existe");
    }
  }
}
