var mongoose = require('mongoose')
var Operaciones = require('./CRUD.js')

var url = "mongodb://localhost/nodeDriver"

mongoose.connect(url)

/*Operaciones.insertarEstudiantes((error, result) => {
    if (error) console.log(error)
    console.log(result)
});*/
Operaciones.ordenarConsulta((error, result) => {
    if (error) console.log(error)
    console.log(result)
})
