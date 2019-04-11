var User = require('./model.js');

module.exports.insertarRegistro = function(callback){
    let Mateo = new User({nombre: 'Mateo', edad: 28, peso: 90});

    Mateo.save((error) => {
        if(error)console.log(error);
        callback(null, "Registro guardado")
    });
}

module.exports.eliminarRegistro =  function(callback){
    User.remove({edad:35}, (error) => {
        if(error)console.log(error);
        callback(null, "Se elimino registro")
    })
    
}

module.exports.consultarYActualizar =  function(db, callback){
    let coleccion = db.collection("users")

    coleccion.find().toArray((error, documents) => {
        if(error)console.log(error)
        console.log(documents)
        callback()
    })
    
    try{
        coleccion.updateOne({nombre: "Steven"}, {$set: {peso:100}})
        console.log("Registro Actualizado")
    }catch(e){
        console.log("Error al actualizar "+e)
    }
    
    
    coleccion.find().toArray((error, documents) => {
        if(error)console.log(error)
        console.log(documents)
        callback()
    })
}