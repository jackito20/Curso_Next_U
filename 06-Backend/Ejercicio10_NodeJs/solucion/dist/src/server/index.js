'use strict';

/*
* Dependencias
*/

var http = require('http');
var express = require('express');
var socketio = require('socket.io');

var port = 8082;
var app = express();

app.use(express.static('public'));
var Server = http.createServer(app);

var io = socketio(Server);

var currentUsers = [];
var currentRoom = '';
var firstSocket = '';

io.on('connection', function (socket) {
    console.log('New user connected to the game, id: ' + socket.id);
    socket.on('newUser', function (user) {
        switch (currentUsers.length) {
            case 0:
                currentUsers.push(user.user);
                currentRoom = user.user;
                firstSocket = socket;
                break;
            case 1:
                currentUsers.push(user.user);
                currentRoom = currentRoom + user.user;
                var random = Math.floor(Math.random() * currentUsers.length + 1);
                socket.join(currentRoom);
                firstSocket.join(currentRoom);
                io.to(currentRoom).emit('newGame', { users: currentUsers, turn: random });
                currentUsers = [];
                break;
            default:
                break;
        }
    });

    socket.on('restartGame', function (data) {
        var usuarios = data.users,
            random = Math.floor(Math.random() * usuarios.length + 1);
        io.to(currentRoom).emit('newGame', { users: usuarios, turn: random });
    });

    socket.on('movement', function (data) {
        socket.broadcast.to(currentRoom).emit('movement', data);
    });

    socket.on('message', function (message) {
        socket.broadcast.to(currentRoom).emit('message', message);
    });
    socket.on('finTurno', function () {
        socket.emit('finTurno');
        socket.broadcast.to(currentRoom).emit('miTurno');
    });
});

Server.listen(port, function () {
    console.log('TitTacToe is ready for play on port: ' + port);
});