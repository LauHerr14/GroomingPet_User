class AgendaCitas extends Connect{
    constructor(){
        super()
        this.id_cliente = 0;
        this.id_mascota = '';
        this.fecha = '';
        this.hora = '';
    }

    setData(data) {
        this.id_cliente = data.id_cliente;
        this.id_mascota = data.id_mascota;
        this.fecha = data.fecha;
        this.hora = data.hora;
    }

    getData(){
        return{
            id_cliente: this.id_cliente,
            id_mascota: this.id_mascota,
            fecha: this.fecha,
            hora: this.hora
        }
    }

    horaAgendada(agendaCitas1, horaAgendadaCallback){
        const endpoint = `agenda_citas`;
        const method = 'POST';
        this.connect(agendaCitas1, endpoint, method, horaAgendadaCallback);
    }

    getByDate(fecha, horaAgendadaCallback){
        const endpoint = `agenda_citas/dia/${fecha}`;
        const method = 'GET';
        this.connect({}, endpoint, method, horaAgendadaCallback);
    }
}