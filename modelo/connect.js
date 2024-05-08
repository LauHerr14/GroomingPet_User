class Connect {
  constructor() {}

  /**
   * Modulo de conexion con la API
   * Utiliza fetch para realizar peticiones al servidor
   *
   * @param {obj} dataReq         : Objeto con los datos a enviar al servidor
   * @param {str} endpoint        : Ruta del servidor a la que se va a conectar
   * @param {str} method          : Metodo de la peticion (GET, POST, PUT, DELETE)
   * @param {func} callback       : Funcion a ejecutar despues de respuesta de la peticion
   */

  connect(dataReq, endpoint, method, callback) {
    const url = `http://localhost:3000/${endpoint}`;

    let config = {
      method: method,
      headers: { "Content-Type": "aplication/json" },
      body: JSON.stringify(dataReq),
    };

    if (method.toUpperCase() === "GET") {
      delete config.body;
    }

    fetch(url, config)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        callback(data);
      })
      .catch((error) => console.log("error...", error));
  }
}
