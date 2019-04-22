const mongoose = require('mongoose')
const Schema = mongoose.Schema

let UserSchema = new Schema({
		id:{ type: Number, require: true, unique:true },
		nombre:{ type: String, require: true },
		password:{ type: String, require: true },
		email:{ type: String, require: true},
		fecha_nacimiento:{ type: String, require: true}
	})

let UserModel = mongoose.model('Usuario', UserSchema)

module.exports = UserModel 
