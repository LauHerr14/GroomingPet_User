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
        this.id = data.id;
        this.nombre_cliente = data.nombre_cliente;
        this.email = data.email;
        this.telefono = data.telefono;
        this.direccion = data.direccion;
        this.password = data.password;
    }

    getData(){
        return {
            id: this.id,
            nombre_cliente: this.nombre_cliente,
            email: this.email,
            telefono: this.telefono,
            direccion: this.direccion
        };
    }

    //Metodo para verificar login
    login(dataReq, loginCallback){
        const endpoint = 'clientes/id';
        const method = 'POST';
        this.connect(dataReq, endpoint, method, loginCallback);
    }
}