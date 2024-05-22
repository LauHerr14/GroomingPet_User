vista = new Vista()
let usuario = new Usuario();
let mascota = new Mascota();

/*---------Inicio----------- */

window.addEventListener('load', function() {
    vista.mostrarPlantilla('inicio', 'areaDeTrabajo')  
    })
  
    function crearUsuario(){
      vista.mostrarPlantilla('registro', 'areaDeTrabajo')
    }

    function registrarUsuario(){
      let data = vista.getForm('formularioRegistro');
      let usr1 = {
        id_cliente : 0,
        nombre_cliente : data.nombre_cliente,
        direccion : data.direccion, 
        telefono : data.telefono, 
        email : data.email
      }

      if (data.ok) {
        usuario.register(data, function(data) {
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
    
    function ingresarUsuario(){
      vista.mostrarPlantilla('login', 'areaDeTrabajo')
    }

    function iniciarSesion() {
      let data = vista.getForm('formularioIniciarSesion');
      if (data.ok) {
        usuario.login(data, function(data) {
          if (data.success) {

            if (data.data == 0) {
              vista.mostrarMensaje(false, 'Usuario o contrseña incorrectos');
              return;
            } 

            let reg = data.data[0];
              reg.email = data.email;
              usuario.setData(reg);
              vista.mostrarPlantilla('servicio', 'areaDeTrabajo');
              
            
          } else {
            vista.mostrarMensaje(false, 'Error al realizar la consulta en la base de datos');
          }
        });
      }
    }
    
    
  
    function registrarMascota(){
      let data = vista.getForm('formIngresar');
      if (data.ok) {
        data.id_cliente = usuario.id_cliente;
        mascota.register(data, function(data) {
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
  
    function mostrarDescripcion1(){
      vista.mostrarPlantilla('banioYPeluqueria', 'areaDeTrabajo')
    }
  
    function mostrarDescripcion2(){
      vista.mostrarPlantilla('corteDeUnias', 'areaDeTrabajo')
    }
  
    function mostrarDescripcion3(){
      vista.mostrarPlantilla('limpiezaGeneral', 'areaDeTrabajo')
    }

    function mostrarDescripcion4(){
      vista.mostrarPlantilla('banioMedicado', 'areaDeTrabajo')
    }
  
    function mostrarAngendarCita(){
      vista.mostrarPlantilla('agendarCita', 'areaDeTrabajo')
    }
  
    function retrocederPantalla2(){
      vista.mostrarPlantilla('registro', 'areaDeTrabajo')
    }

    function retrocederPantalla(){
      vista.mostrarPlantilla('inicio', 'areaDeTrabajo')
    }

    function retrocederPantalla1(){
      vista.mostrarPlantilla('servicio', 'areaDeTrabajo')
    }

    function mostrarFinal(){
      vista.mostrarPlantilla('final', 'areaDeTrabajo')
    }

    function salirAplicacion(){
      vista.mostrarPlantilla('inicio', 'areaDeTrabajo')
    }