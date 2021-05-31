const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Valor = new Schema({
    Usuario: String,
    Humedad: String,
    Temperatura: String,
    Distancia: String,
    Fecha: Date
});
module.exports = mongoose.model('IOT_Proyecto', Valor);