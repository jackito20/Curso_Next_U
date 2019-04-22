/*
* Dependencias
*/

var http = require('http')
var express = require('express')
var socketio = require('socket.io')

var port = 8082
var app = express()

app.use(express.static('public'))


function handle(req, res){
    res.end("Funcionando..."+req.url)
}

var Server = http.createServer(handle)
Server.listen(port, function(){
    console.log("server listen port "+port)
})
