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