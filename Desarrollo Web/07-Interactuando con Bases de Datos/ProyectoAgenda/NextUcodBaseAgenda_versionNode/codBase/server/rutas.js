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
        let id = Math.floor(Math.random() * 50); 
        let event = new Events({
            id: id,
            title: req.body.title,
            start: req.body.start,
            end: req.body.end,
            user: req.session.usuario
        })
        event.save(function(error) {
            if (error) {
                res.status(500)
                res.json(error)
            }
            Events.findOne({id: id}).exec(function(err, docs) {
                if (err) {
                    res.status(500)
                    res.json(err)
                }
                res.json(docs)
            })
            //res.send("Registro guardado")
        })
    }else{
        res.send("session")
    }
})

//Obtener todos eventos de un usuario
Router.get('/events/all', function(req, res) {
    if(req.session.usuario){
        Events.find({user: req.session.usuario}).exec(function(err, docs) {
            if (err) {
                res.status(500)
                res.json(err)
            }
            res.json(docs)
        })
    }else{
        res.json("session")   
    }
})

// Eliminar un evento por su id
Router.post('/events/delete/:id', function(req, res) {
    if(req.session.usuario){
        let eid = req.params.id
        Events.deleteOne({id: eid}, function(error) {
            if(error) {
                res.status(500)
                res.json(error)
            }
            res.send("Registro eliminado")
        })
    }else{
        res.send("session")
    }
})


// Actualizar a un evento
Router.post('/events/update_event', function(req, res) {
    if(req.session.usuario){
        let eid = req.body.id,
            start = req.body.start,
            end = req.body.end;
        Events.updateOne({id: eid}, { start : start, end : end } , function(error) {
            if(error) {
                res.status(500)
                res.json(error)
            }
            res.json("Registro actualizado")
        })
    }else{
        res.json("session")
    }
})

module.exports = Router
