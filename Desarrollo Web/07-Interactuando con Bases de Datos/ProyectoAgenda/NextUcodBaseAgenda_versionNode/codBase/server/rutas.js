const Router = require('express').Router();
const Users = require('./userModel.js')
const Events = require('./eventModel.js')


// Validar login de usuario
Router.post('/login', function(req, res) {
    let mail = req.query.user
    let pass = req.query.pass
    Users.findOne({mail: mail, pass: pass}).exec(function(err, doc){
        if (err) {
            res.status(500)
            res.json(err)
        }
        req.session.usuario = doc.id;
        res.json("Validado")
    })
})

// Cerrar session de usuario
Router.get('/logout', function(req, res) {
    req.session.destroy();
    res.send("OK");
})

// Agregar a un evento
Router.post('/events/new', function(req, res) {
    if(req.session.usuario){
        let event = new Events({
            id: Math.floor(Math.random() * 50),
            titulo: req.body.title,
            fecha_inicio: req.body.start,
            fecha_fin: req.body.end,
            usuario: req.session.usuario
        })
        event.save(function(error) {
            if (error) {
                res.status(500)
                res.json(error)
            }
            res.send("Registro guardado")
        })
    }else{
        res.send("No se ha iniciado session")
    }
})

//Obtener todos los usuarios
/*Router.get('/all', function(req, res) {
    Users.find({}).exec(function(err, docs) {
        if (err) {
            res.status(500)
            res.json(err)
        }
        res.json(docs)
    })
})

// Obtener un usuario por su id
Router.get('/', function(req, res) {
    let nombre = req.query.nombre
    Users.findOne({nombres: nombre}).exec(function(err, doc){
        if (err) {
            res.status(500)
            res.json(err)
        }
        res.json(doc)
    })
})

// Agregar a un usuario
Router.post('/new', function(req, res) {
    let user = new Users({
        userId: Math.floor(Math.random() * 50),
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        edad: req.body.edad,
        sexo: req.body.sexo,
        estado: "Activo"
    })
    user.save(function(error) {
        if (error) {
            res.status(500)
            res.json(error)
        }
        res.send("Registro guardado")
    })
})

// Eliminar un usuario por su id
Router.get('/delete/:id', function(req, res) {
    let uid = req.params.id
    Users.remove({userId: uid}, function(error) {
        if(error) {
            res.status(500)
            res.json(error)
        }
        res.send("Registro eliminado")
    })
})

// Inactivar un usuario por su id
Router.post('/inactive/:id', function(req, res) {

})

// Activar un usuario por su id
Router.post('/active/:id', function(req, res) {

})
*/
module.exports = Router
