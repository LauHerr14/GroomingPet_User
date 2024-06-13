vista = new Vista()
let usuario = new Usuario();
let mascota = new Mascota();
let agendaCitas = new AgendaCitas();
let listaMascotas = [];

/*---------Inicio----------- */

window.addEventListener('load', function () {
  vista.mostrarPlantilla('inicio', 'areaDeTrabajo')
})

function crearUsuario() {
  vista.mostrarPlantilla('registro', 'areaDeTrabajo')
}

function registrarUsuario() {
  let data = vista.getForm('formularioRegistro');
  let usr1 = {
    id_cliente: 0,
    nombre_cliente: data.nombre_cliente,
    direccion: data.direccion,
    telefono: data.telefono,
    email: data.email
  }

  if (data.ok) {
    usuario.register(data, function (data) {
      console.log()
      if (data.success) {
        vista.mostrarPlantilla('mascota', 'areaDeTrabajo');
        vista.mostrarMensaje(true, "Registro exitoso")
        usr1.id_cliente = data.data
        usuario.setData(usr1);

      } else {
        vista.mostrarMensaje(false, 'Error al crrear usuario');
      }
    });
  }
}

function ingresarUsuario() {
  vista.mostrarPlantilla('login', 'areaDeTrabajo')
}

function iniciarSesion() {
  let data = vista.getForm('formularioIniciarSesion');
  if (data.ok) {
    data.id_mascota = mascota.id_mascota;
    usuario.login(data, function (data) {
      if (data.success) {

        if (data.data == 0) {
          vista.mostrarMensaje(false, 'Usuario o contrseña incorrectos');
          return;
        }

        let reg = data.data[0];
        reg.email = data.email;
        usuario.setData(reg);
        vista.mostrarPlantilla('servicio', 'areaDeTrabajo');
        //Consultar mascotas
        mascota.listar(usuario.id_cliente, function(data){
          listaMascotas = data.data;
        })




      } else {
        vista.mostrarMensaje(false, 'Error al realizar la consulta en la base de datos');
      }
    });
  }
}

function registrarMascota() {
  let data = vista.getForm('formIngresar');
  if (data.ok) {
    data.id_cliente = usuario.id_cliente;
    mascota.register(data, function (data) {
      console.log()
      if (data.success) {
        vista.mostrarPlantilla('servicio', 'areaDeTrabajo');
        vista.mostrarMensaje(true, "Mascota registrada")

      } else {
        vista.mostrarMensaje(false, 'Error al registrar la mascota');
      }
    });
  }
}

function mostrarDescripcion1() {
  vista.mostrarPlantilla('banioYPeluqueria', 'areaDeTrabajo')
}

function mostrarDescripcion2() {
  vista.mostrarPlantilla('corteDeUnias', 'areaDeTrabajo')
}

function mostrarDescripcion3() {
  vista.mostrarPlantilla('limpiezaGeneral', 'areaDeTrabajo')
}

function mostrarDescripcion4() {
  vista.mostrarPlantilla('banioMedicado', 'areaDeTrabajo')
}

function mostrarAngendarCita() {
  vista.mostrarPlantilla('agendarCita', 'areaDeTrabajo')
  //Cargar select de mascotas
  vista.insertar_opciones_select(listaMascotas, "seleccionarMascota", "id_mascota", "nombre_mascota")
}

function retrocederPantalla2() {
  vista.mostrarPlantilla('registro', 'areaDeTrabajo')
}

function retrocederPantalla() {
  vista.mostrarPlantilla('inicio', 'areaDeTrabajo')
}

function retrocederPantalla1() {
  vista.mostrarPlantilla('servicio', 'areaDeTrabajo')
}

function retrocederPantallaInicio() {
  vista.mostrarPlantilla('login', 'areaDeTrabajo')
}

function agendarCita() {
  let data = vista.getForm('hora_disponible');
  data.id_cliente = usuario.id_cliente,
  data.id_mascota = mascota.id_mascota;
  
  if (data.ok) {
    console.log("informacion: ", data);
    agendaCitas.horaAgendada(data, function (data) {
      if (data.success) {
        if (data.data == 0) {
          vista.mostrarPlantilla('final', 'areaDeTrabajo');
          vista.mostrarMensaje(true, 'Su cita fue agendada con exito');
          agendaCitas.setData(data);
        } 

      } else {
        vista.mostrarMensaje(false, "La hora seleccionada no esta disponible");
      }
    });
  }
}



function salirAplicacion() {
  vista.mostrarPlantilla('inicio', 'areaDeTrabajo')
}

function nuevaMascota() {
  vista.mostrarPlantilla('nuevaMascota', 'areaDeTrabajo')
}

function siguienteMascota() {
        vista.mostrarPlantilla('mascota', 'areaDeTrabajo');
}


//Consulta citas disponibles para la fecha seleccionada
function consultarCitas() {
  //Leer fecha del input fechaCita
  let fecha = document.getElementById('fechaCita').value
  //consultar en la BD las citas para esa fecha
  agendaCitas.getByDate(fecha, function(data){
    let listaHoras = data.data;
    //generar lista de horas que NO ESTEN en la consulta anterior
    let disponibles = []
    for (let h = 9; h < 20; h++) {
      //Buscar h en listaHoras
      let horaOcupada = listaHoras.find(o => o.hora == h+':00:00');
      //Si no esta, agregar a disponibles
      if (!horaOcupada) {
        disponibles.push(':00:00');
        
      }
      
    }
  //Llenar el select de horas disponibles con la lista anterior
  });

}