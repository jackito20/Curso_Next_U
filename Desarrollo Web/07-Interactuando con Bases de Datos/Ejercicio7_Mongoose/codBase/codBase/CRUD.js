var User = require('./models.js')
var Estudiante = require('./modelEstudiante.js')

module.exports.insertarRegistro = function(callback) {
    let Mateo = new User({ nombre: "Mateo", edad: 28, peso: 90 })

    Mateo.save((error) => {
        if (error) callback(error)
        callback(null, "Registro guardado")
    })
}

module.exports.insertarEstudiantes = function(callback) {
    let EstudiantesArray = [
        new Estudiante({ nombre: "Jackeline", edad: 30, genero: "Femenino", peso: 80 }),
        new Estudiante({ nombre: "Jose", edad: 35, genero: "Masculino", peso: 85 }),
        new Estudiante({ nombre: "Pedro", edad: 20, genero: "Masculino", peso: 70 }),
        new Estudiante({ nombre: "Ana", edad: 25, genero: "Femenino", peso: 60 }),
        new Estudiante({ nombre: "Maria", edad: 40, genero: "Femenino", peso: 55 }),
        new Estudiante({ nombre: "Pepe", edad: 30, genero: "Masculino", peso: 90 }),
        new Estudiante({ nombre: "Jhon", edad: 30, genero: "Masculino", peso: 85 }),
        new Estudiante({ nombre: "Sofia", edad: 34, genero: "Femenino", peso: 55 }),
        new Estudiante({ nombre: "Julian", edad: 33, genero: "Masculino", peso: 90 }),
        new Estudiante({ nombre: "Jose", edad: 30, genero: "Masculino", peso: 70 }),
    ]
    
    EstudiantesArray.forEach(estudiante => {
        estudiante.save((error) => {
            if (error) callback(error)
            callback(null, "Registro guardado")
        })
    });
    
}

module.exports.eliminarRegistro = function(callback) {
    User.remove({ edad: 35 }, (error) => {
        if (error) callback(error)
        callback(null, "Se elimino el registro correctamente");
    })
}

module.exports.consultarYActualizar = function(callback) {
    User.find({}).exec((error, result) => {
        if (error) callback(error)
        console.log(result)
        User.update({nombre: "Mateo"}, {peso: 40}, (error, result) => {
            if (error) callback(error)
            callback(null, result)
        })
    })
}

module.exports.ordenarConsulta = function(callback) {
    //Estudiante.find({}).sort("edad")

    Estudiante.find({}).sort({edad: -1}).exec((error, result) => {
        if (error) callback(error)
        callback(null, result)
    });
}