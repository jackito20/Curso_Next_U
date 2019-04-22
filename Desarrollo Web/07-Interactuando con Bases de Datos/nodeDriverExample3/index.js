var MongoClient = require('mongodb').MongoClient

var url = "mongodb://localhost/nodeDriver"

var Operaciones = require("./CRUD.js")

MongoClient.connect(url, function(err, db){
    if(err){
        console.log("ERROR EN CONEXION")
        console.log(err)
    }
    console.log("Conexion Ok con la BD")
    Operaciones.consultarYActualizar(db, (error, result) => {
        if(error)console.log("Error en eliminacion "+error)
    })
})