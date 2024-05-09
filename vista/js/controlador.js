 vista = new Vista()
 let usuario = new Usuario


/*---------Inicio----------- */

window.addEventListener('load', function() {
    vista.mostrarPlantilla('inicio', 'areaDeTrabajo')  
    })
  
    function crearUsuario(){
      vista.limpiarArea('areaDeTrabajo')
      vista.mostrarPlantilla('registro', 'areaDeTrabajo')
    }

    function mostrarMascotas(){
      vista.limpiarArea('areaDeTrabajo')
      vista.mostrarPlantilla('mascota', 'areaDeTrabajo')
    }
  
    function ingresarUsuario(){
      vista.limpiarArea('areaDeTrabajo')
      vista.mostrarPlantilla('iniciarSesion', 'areaDeTrabajo')
    }
  

    function ingresar() {
      let data = vista.getForm('formlogin');
      if (data.ok) {
        usuario.login(data, function(data) {
          if (data.success) {
            if (data.cant == 0) {
              vista.mostrarMensaje(false, 'Uusario o contrseña incorrectos');
              return;
            }
            if (data.user.tipo == 'cliente') {
              const regUsuario = {
                id_cliente: data.user.id,
                nombre_cliente: data.user.nombre_cliente
              };
              
              usuario.setData(regUsuario);
              mostrarServicios();
            } else {
              vista.mostrarMensaje(false, 'Error al realizar la consulta en la base de datos');
            }
          }
        });
      }
    }
    
  
    function mostrarServicios(){
      vista.limpiarArea('areaDeTrabajo')
      vista.mostrarPlantilla('servicio', 'areaDeTrabajo')
    }
  
    function mostrarDescripcion1(){
      vista.limpiarArea('areaDeTrabajo')
      vista.mostrarPlantilla('banioYPeluqueria', 'areaDeTrabajo')
    }
  
    function mostrarDescripcion2(){
      vista.limpiarArea('areaDeTrabajo')
      vista.mostrarPlantilla('corteDeUnias', 'areaDeTrabajo')
    }
  
    function mostrarDescripcion3(){
      vista.limpiarArea('areaDeTrabajo')
      vista.mostrarPlantilla('limpiezaGeneral', 'areaDeTrabajo')
    }

    function mostrarDescripcion4(){
      vista.limpiarArea('areaDeTrabajo')
      vista.mostrarPlantilla('banioMedicado', 'areaDeTrabajo')
    }
  
    function mostrarAngendarCita(){
      vista.limpiarArea('areaDeTrabajo')
      vista.mostrarPlantilla('agendarCita', 'areaDeTrabajo')
    }
  
    function retrocederPantalla2(){
      vista.limpiarArea('areaDeTrabajo')
      vista.mostrarPlantilla('registro', 'areaDeTrabajo')
    }

    function retrocederPantalla(){
      vista.limpiarArea('areaDeTrabajo')
      vista.mostrarPlantilla('inicio', 'areaDeTrabajo')
    }

    function retrocederPantalla1(){
      vista.limpiarArea('areaDeTrabajo')
      vista.mostrarPlantilla('servicio', 'areaDeTrabajo')
    }

    function mostrarFinal(){
      vista.limpiarArea('areaDeTrabajo')
      vista.mostrarPlantilla('final', 'areaDeTrabajo')
    }

    function salirAplicacion(){
      vista.limpiarArea('areaDeTrabajo')
      vista.mostrarPlantilla('inicio', 'areaDeTrabajo')
    }