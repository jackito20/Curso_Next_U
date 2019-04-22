var MongoClient = require('mongodb').MongoClient

var url = "mongodb://localhost/nodeDriver"

var mongoose = require('mongoose')
var Operaciones = require("./CRUD.js")
mongoose.connect(url);

Operaciones.eliminarRegistro((error, result) => {
    if(error)console.log(error);
    console.log(result);
})