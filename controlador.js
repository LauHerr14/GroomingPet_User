vista = new Vista();
let usuario = new Usuario();
let mascota = new Mascota();
let agendaCitas = new AgendaCitas();
let listaMascotas = [];
let horaDisponible = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
/*---------Inicio----------- */

window.addEventListener("load", function () {
  vista.mostrarPlantilla("inicio", "areaDeTrabajo");
});

function crearUsuario() {
  vista.mostrarPlantilla("registro", "areaDeTrabajo");
}

function registrarUsuario() {
  let data = vista.getForm("formularioRegistro");
  let usr1 = {
    id_cliente: 0,
    nombre_cliente: data.nombre_cliente,
    direccion: data.direccion,
    telefono: data.telefono,
    email: data.email,
  };

  if (data.ok) {
    usuario.register(data, function (data) {
      console.log();
      if (data.success) {
        vista.mostrarPlantilla("mascota", "areaDeTrabajo");
        vista.mostrarMensaje(true, "Registro exitoso");
        usr1.id_cliente = data.data;
        usuario.setData(usr1);
      } else {
        vista.mostrarMensaje(false, "Error al crrear usuario");
      }
    });
  }
}

function ingresarUsuario() {
  vista.mostrarPlantilla("login", "areaDeTrabajo");
}

function iniciarSesion() {
  let data = vista.getForm("formularioIniciarSesion");

  if (data.ok) {
    data.id_mascota = mascota.id_mascota;
    usuario.login(data, function (data) {
      if (data.success) {
        if (data.data == 0) {
          vista.mostrarMensaje(false, "Usuario o contrseña incorrectos");
          return;
        }

        let reg = data.data[0];
        reg.email = data.email;
        usuario.setData(reg);
        vista.mostrarPlantilla("servicio", "areaDeTrabajo");
        //Consultar mascotas
        mascota.listar(usuario.id_cliente, function (data) {
          listaMascotas = data.data;
        });
      } else {
        vista.mostrarMensaje(
          false,
          "Error al realizar la consulta en la base de datos"
        );
      }
    });
  }
}

function registrarMascota() {
  let data = vista.getForm("formIngresar");
  if (data.ok) {
    data.id_cliente = usuario.id_cliente;
    mascota.register(data, function (data) {
      console.log();
      if (data.success) {
        vista.mostrarPlantilla("servicio", "areaDeTrabajo");
        vista.mostrarMensaje(true, "Mascota registrada");
      } else {
        vista.mostrarMensaje(false, "Error al registrar la mascota");
      }
    });
  }
}

function mostrarDescripcion1() {
  vista.mostrarPlantilla("banioYPeluqueria", "areaDeTrabajo");
}

function mostrarDescripcion2() {
  vista.mostrarPlantilla("corteDeUnias", "areaDeTrabajo");
}

function mostrarDescripcion3() {
  vista.mostrarPlantilla("limpiezaGeneral", "areaDeTrabajo");
}

function mostrarDescripcion4() {
  vista.mostrarPlantilla("banioMedicado", "areaDeTrabajo");
}

function mostrarAngendarCita() {
  vista.mostrarPlantilla("agendarCita", "areaDeTrabajo");
  //Cargar select de mascotas
  vista.insertar_opciones_select(
    listaMascotas,
    "seleccionarMascota",
    "id_mascota",
    "nombre_mascota"
  );
}

function retrocederPantalla2() {
  vista.mostrarPlantilla("registro", "areaDeTrabajo");
}

function retrocederPantalla() {
  vista.mostrarPlantilla("inicio", "areaDeTrabajo");
}

function retrocederPantalla1() {
  vista.mostrarPlantilla("servicio", "areaDeTrabajo");
}

function retrocederPantallaInicio() {
  vista.mostrarPlantilla("login", "areaDeTrabajo");
}

function agendarCita() {
  let data = vista.getForm("hora_disponible");
  (data.id_cliente = usuario.id_cliente);


  if (data.ok) {
    console.log("informacion: ", data);
    agendaCitas.horaAgendada(data, function (data) {
      if (data.success) {
        vista.mostrarPlantilla("final", "areaDeTrabajo");
        vista.mostrarMensaje(true, "Su cita fue agendada con exito");
        agendaCitas.setData(data);
      } else {
        vista.mostrarMensaje(false, "La hora seleccionada no esta disponible");
      }
    });
  }
}

function salirAplicacion() {
  vista.mostrarPlantilla("inicio", "areaDeTrabajo");
}

function nuevaMascota() {
  vista.mostrarPlantilla("nuevaMascota", "areaDeTrabajo");
}

function siguienteMascota() {
  let data = vista.getForm("formularioNuevaMascota");
  if (data.ok) {
    usuario.validar(data, function (data) {
      if (data.success) {
        if (data.data == 0) {
          vista.mostrarMensaje(false, "El correo es incorrecto");
          return;
        }

        let reg = data.data[0];
        reg.email = data.email;
        usuario.setData(reg);
        vista.mostrarPlantilla("mascota", "areaDeTrabajo");
      } else {
        vista.mostrarMensaje(
          false,
          "Error al realizar la consulta en la base de datos"
        );
      }
    });
  }
}

//Consulta citas disponibles para la fecha seleccionada
function consultarCitas() {
  const disponibles = [];
  //Leer fecha del input fechaCita
  let fecha = document.getElementById("fechaCita").value;
  //consultar en la BD las citas para esa fecha
  agendaCitas.getByDate(fecha, function (data) {
    let listaHoras = data.data;
    console.log(listaHoras);
    //generar lista de horas que NO ESTEN en la consulta anterior

    for (let h = 9; h < 21; h++) {
      //Buscar h en listaHoras
      let horaOcupada = listaHoras.find((o) => o.hora_ocupada == h);

      //Si no esta, agregar a disponibles
      if (!horaOcupada) {
        disponibles.push({ hora_disponible: `${h}:00` });
      }
      console.log(disponibles);
    }

    const disponiblesOjt = Object.fromEntries(
      disponibles.map((obj) => [
        obj.hora_disponible.toString(),
        obj.hora_disponible,
      ])
    );
    console.log(disponiblesOjt);

    vista.limpiarArea("hora");
    vista.insertar_opciones_select(
      disponibles,
      "hora",
      "hora_disponible",
      "hora_disponible"
    );

    //Llenar el select de horas disponibles con la lista anterior
  });
}
