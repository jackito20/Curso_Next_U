const mongoose = require('mongoose')
const Schema = mongoose.Schema

let EventSchema = new Schema({
		id:{ type: Number, require: true, unique:true },
		user:{ type: Number, require: true},
		title:{ type: String, require: true },
		start:{ type: String, require: true },
		//hora_inicio:{ type: String},
		end:{ type: String, require: true}
        //hora_fin:{ type: String},
        //dia_completo:{ type: Boolean, require: true}
	})

let EventModel = mongoose.model('Evento', EventSchema)

module.exports = EventModel 
