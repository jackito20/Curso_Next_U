var User = require('./userModel.js')

var url = "mongodb://localhost/agenda"

var mongoose = require('mongoose')
mongoose.connect(url);
 
let usuario = new User(
    { 
        id: Math.floor(Math.random() * 50),
        nombre: "Jackeline",
        password: "123", 
        email: "jac@mail.com", 
        fecha_nacimiento: "1988-06-22" 
    })

usuario.save((error) => {
    if (error) console.log(error)
    console.log("Registro guardado")
})

