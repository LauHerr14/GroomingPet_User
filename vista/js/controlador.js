 vista = new Vista()


/*---------Inicio----------- */

window.addEventListener('load', function() {
    vista.mostrarPlantilla('inicio', 'areaDeTrabajo')  
    })
  
    function crearUsuario(){
      vista.limpiarArea('areaDeTrabajo')
      vista.mostrarPlantilla('registro', 'areaDeTrabajo')
    }
  
    function ingresarUsuario(){
      vista.limpiarArea('areaDeTrabajo')
      vista.mostrarPlantilla('iniciarSesion', 'areaDeTrabajo')
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
  
  
  
    function retrocederPantalla(){
      vista.limpiarArea('areaDeTrabajo')
      vista.mostrarPlantilla('inicio', 'areaDeTrabajo')
    }

    function retrocederPantalla1(){
      vista.limpiarArea('areaDeTrabajo')
      vista.mostrarPlantilla('servicio', 'areaDeTrabajo')
    }