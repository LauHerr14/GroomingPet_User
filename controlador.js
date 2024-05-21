vista = new Vista()
let usuario = new Usuario();


/*---------Inicio----------- */

window.addEventListener('load', function() {
    vista.mostrarPlantilla('inicio', 'areaDeTrabajo')  
    })
  
    function crearUsuario(){
      vista.mostrarPlantilla('registro', 'areaDeTrabajo')
    }

    function registrarUsuario(){
      let data = vista.getForm('formularioRegistro');
      if (data.ok) {
        usuario.register(data, function(data) {
          console.log()
          if (data.success) {
              vista.mostrarPlantilla('mascota', 'areaDeTrabajo');
              alert("Registro exitoso")  
            
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
            let reg = data.data[0];
              reg.email = data.email;
              usuario.setData(reg);
              vista.mostrarPlantilla('servicio', 'areaDeTrabajo');
              
            if (data.data.length == 0) {
              vista.mostrarMensaje(false, 'Usuario o contrseña incorrectos');
              return;
            } 
            
          } else {
            vista.mostrarMensaje(false, 'Error al realizar la consulta en la base de datos');
          }
        });
      }
    }
    
    
  
    function mostrarServicios(){
      let data = vista.getForm('formIngresar');
      if (data.ok) {
        mascota.register(data, function(data) {
          console.log()
          if (data.success) {
            vista.mostrarPlantilla('servicio', 'areaDeTrabajo');
            alert('Mascota registrada')

          } else {
            vosta.mostrarMensaje(false, 'Error al registrar la mascota');
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