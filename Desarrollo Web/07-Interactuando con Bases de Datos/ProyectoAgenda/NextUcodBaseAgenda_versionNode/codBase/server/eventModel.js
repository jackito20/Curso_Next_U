const mongoose = require('mongoose')
const Schema = mongoose.Schema

let EventSchema = new Schema({
		id:{ type: Number, require: true, unique:true },
		usuario:{ type: Number, require: true},
		titulo:{ type: String, require: true },
		fecha_inicio:{ type: String, require: true },
		//hora_inicio:{ type: String},
		fecha_fin:{ type: String, require: true}
        //hora_fin:{ type: String},
        //dia_completo:{ type: Boolean, require: true}
	})

let EventModel = mongoose.model('Evento', EventSchema)

module.exports = EventModel 
