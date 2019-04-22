var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    nombre: { type: String, required: true },
    edad: { type: Number, required: true },
    peso: { type: Number, required: true }
})

var User = mongoose.model('Users', userSchema);

module.exports = User;
