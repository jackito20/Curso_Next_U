var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var estudianteSchema = new Schema({
    nombre: { type: String, required: true },
    edad: { type: Number, required: true },
    genero: { type: String, required: true },
    estatura: { type: Number}
})

var Estudiante = mongoose.model('Estudiante', estudianteSchema);

module.exports = Estudiante;
