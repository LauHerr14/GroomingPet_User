class Usuario extends Connect{
    constructor(){
        super();
        this.id_cliente = 0;
        this.nombre_cliente = '';
        this.direccion = '';
        this.telefono = '';
        this.email = '';
        this.password = '';
    }

    setData(data){
        this.id_cliente = data.id_cliente;
        this.nombre_cliente = data.nombre_cliente;
        this.direccion = data.direccion;         
        this.telefono = data.telefono;
        this.email = data.email;
        this.password = data.password;
    }

    getData(){
        return {
            id_cliente: this.id_cliente,
            nombre_cliente: this.nombre_cliente,
            direccion: this.direccion,
            telefono: this.telefono,
            email: this.email,
            password: this.password
        };
    }

    //Metodo para verificar login
    login(dataReq, loginCallback){
        const endpoint = `clientes/login`;
        const method = 'POST';
        this.connect(dataReq, endpoint, method, loginCallback);
    }

    register(dataReq, registerCallback){
        const endpoint = `clientes`;
        const method = 'POST';
        this.connect(dataReq, endpoint, method, registerCallback);
    }

    validar(dataReq, validarCallback){
        const endpoint = `clientes/email`;
        const method = 'POST';
        this.connect(dataReq, endpoint, method, validarCallback);
    }
}