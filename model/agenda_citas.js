class Agenda_citas extends Connect{
    constructor(){
        super()
        this.id_cliente = 0;
        this.id_mascota = 0;
        this.hora_agendada = '';
    }

    setData(data) {
        this.id_cliente = data.id_cliente;
        this.id_mascota = data.id_mascota;
        this.hora_agendada = data.hora_agendada;
    }

    getData(){
        return{
            id_cliente: this.id_cliente,
            id_mascota: this.id_mascota,
            hora_agendada: this.hora_agendada
        }
    }

    getAll(dataReq, registerCallback) {
        const endpoint = `agenda_citas`;
        const method = 'GET';
        this.connect(dataReq, endpoint, method, registerCallback)
    }
}