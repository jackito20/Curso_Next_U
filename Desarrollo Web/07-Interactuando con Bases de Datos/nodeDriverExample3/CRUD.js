module.exports.insertarRegistro = function(db, callback){
    let coleccion = db.collection("users")

    coleccion.insertMany([
        {nombre: "David", edad: 25, peso:75},
        {nombre: "Steven", edad: 35, peso:80},
        {nombre: "Fernando", edad: 40, peso:68}
    ], (error, result) => {
        console.log("Resultado de insert: "+ result.toString())
    })
}

module.exports.eliminarRegistro =  function(db, callback){
    let coleccion = db.collection("users")

    try{
        coleccion.deleteOne({edad:40})
        console.log("Eliminado correctamente")

    }catch(e){
        console.log("se genero error "+e)
    }
    
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