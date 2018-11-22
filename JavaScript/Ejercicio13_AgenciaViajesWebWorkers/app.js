
delete localStorage.usuario
var formRegistro = document.getElementsByClassName('registro')[0],
    formReserva  = document.getElementsByClassName('reserva')[0];

// Almacenamos el objeto localStorage en una variable
var Storage = window.localStorage
// Verificar si localStorage tiene alguna
var worker = new Worker('doHtml.js')
worker.postMessage(Storage.usuario ? Storage.usuario:"none")
worker.addEventListener('message', function(e){
  if (e.data==true) {
    // Si la llave usuario existe en localStorage mostrar el formulario de reserva
    formReserva.className = "reserva"
    formRegistro.className = "registro hide"
  } else {
    // Si no existe se debe mostrar el formulario de regisro
    formRegistro.className = "registro"
    formReserva.className += "reserva hide"
  }
})

var botonRegistro = document.getElementById('registrar'),
    botonReserva  = document.getElementById('reservar')
    inputDocumento = document.getElementById('numDocRes');

botonRegistro.addEventListener('click', function(e) {
  e.preventDefault()

  if(localStorage.usuario){
    this.usuarios = JSON.parse(localStorage.getItem('usuario'))
  }else{
    this.usuarios=[]
  }

  var usuario = {
    ndocumento : document.getElementById('numDoc').value,
    nombre : document.getElementById('nombreCom').value,
    email : document.getElementById('correo').value,
    nusuario : document.getElementById('nombreUsuario').value,
    contrasena : document.getElementById('password').value
  }
  this.usuarios.push(usuario)
  localStorage.setItem('usuario', JSON.stringify(this.usuarios))
})

botonReserva.addEventListener('click', function(e) {
  e.preventDefault()

  if(localStorage.reserva){
    this.reservas = JSON.parse(localStorage.getItem('reserva'))
  }else{
    this.reservas=[]
  }

  var reserva = {
    destino : document.getElementById('destino').value,
  }
  this.reservas.push(reserva)
  localStorage.setItem('reserva', JSON.stringify(this.reservas))

})

inputDocumento.addEventListener('keypress', function(e) {
  if (e.which === 13) {
    var usuario = JSON.parse(localStorage.getItem('usuario'))
    if(document.getElementById('numDocRes').value == usuario[0].ndocumento)
      document.getElementById('nombreUsuarioRes').value=usuario[0].nusuario
      document.getElementById('nombreComRes').value=usuario[0].nombre
      document.getElementById('correoRes').value=usuario[0].email
  }
})
