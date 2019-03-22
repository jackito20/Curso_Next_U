/*
* Dependencias
*/

var http = require('http')
var express = require('express')
var socketio = require('socket.io')

var port = 8082
var app = express()

app.use(express.static('public'))


var Server = http.createServer(app)

var io = socketio(Server)

var usuariosActuales = []
var primerSocket = ""
var currentRoom = ""

io.on("connection", function(socket){
    console.log("Nuevo usuario conectado, socket: "+socket.id)

    socket.on("newUser", function(user){
        if(usuariosActuales.length>0){
            currentRoom = usuariosActuales[0]+user.user;
            socket.join(currentRoom)
            primerSocket.join(currentRoom)
            let random = Math.floor(Math.random() * usuariosActuales.length + 1)
            io.to(currentRoom).emit('newGame', { users: usuariosActuales, turn: random })
        }else{
            usuariosActuales.push(user.user)
            primerSocket = socket
            
        }
    })

    /**let permite declarar variables limitando su alcance (scope) al bloque, declaración, 
     * o expresión donde se está usando. Lo anterior diferencia  let de la palabra reservada var , 
     * la cual define una variable global o local en una función sin importar el ámbito del bloque. */

    socket.on("restartGame", function(data){
        let usuarios = data.users,
        random = Math.floor(Math.random() * usuarios.length + 1)
        io.to(currentRoom).emit('newGame', { users: usuarios, turn: random })
    })

    socket.on("movement", function(data){
        io.broadcast.to(currentRoom).emit('movement', data)
    })

    socket.on("message", function(data){
        io.broadcast.to(currentRoom).emit('message', data)
    })

    socket.on("finTurno", function(){
        io.emit('finTurno')
        io.broadcast.to(currentRoom).emit('miTurno', data)
    })
})

Server.listen(port, function () {
    console.log('TitTacToe is ready for play on port: '+port)
})