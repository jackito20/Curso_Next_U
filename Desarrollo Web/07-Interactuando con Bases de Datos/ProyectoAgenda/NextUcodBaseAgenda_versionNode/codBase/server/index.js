const http = require('http'),
    path = require('path'),
    Routing = require('./rutas.js'),
    express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    session = require('express-session'), 
    cookieParser = require('cookie-parser');

const PORT = 3000
const app = express()

const Server = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.use(express.static('client'))

app.use(cookieParser())
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));

app.use('/', Routing)

Server.listen(PORT, function(){
    console.log("Server is listening on port: "+ PORT);
    mongoose.connect('mongodb://localhost/agenda')
})

