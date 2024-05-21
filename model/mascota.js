class Mascota extends Connect{
    constructor(){
        super()
        this.id_mascota = 0;
        this.id_cliente = '';
        this.nombre_mascota = '';
        this.tipo_mascota = '';
    }

    setData(data) {
        this.id_mascota = data.id_mascota;
        this.id_cliente = data.id_cliente;
        this.nombre_mascota = data.nombre_mascota;
        this.tipo_mascota = data.tipo_mascota;
    }

    getData(){
        return{
            id_mascota: this.id_mascota,
            id_cliente: this.id_cliente,
            nombre_mascota: this.nombre_mascota,
            tipo_mascota: this.nombre_mascota
        }
    }

    register(dataReq, registerCallback) {
        const endpoint = `mascotas`;
        const method = 'POST';
        this.connect(dataReq, endpoint, method, registerCallback)
    }
}