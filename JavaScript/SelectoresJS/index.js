
var nombre, apellido, email, usuario, password, boton;

nombre = document.getElementById("nombre");
apellido = document.getElementById("apellido");
email = document.getElementById("email");
usuario = document.getElementById("usuario");
password = document.getElementById("password");
boton = document.getElementById("btn-guardar");

console.log(password);

function mostrarAlerta(){
  alert("El usuario hizo click");
}

boton.addEventListener("click", mostrarAlerta);
