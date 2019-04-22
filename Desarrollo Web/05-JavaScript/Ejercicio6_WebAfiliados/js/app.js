
var Usuario={
  nombre_completo: "",
  nombre_usuario: "",
  contrasena: "",
  email: "",
  fecha_nacimiento:"",
  descripcion:"",
  tipoSuscripcion:"",
  ciudad:"",
  direccion:"",
  telefono:"",
  celular:"",
  nacionalidad:"",
  masculino:"",
  femenino:"",
  efectivo:"",
  credito:"",

  imprimirDatos: function(){
    console.log("Nombre Completo: "+this.nombre_completo);
    console.log("Nombre Usuario: "+this.nombre_usuario);
    console.log("Contraseña: "+this.contrasena);
    console.log("Email: "+this.email);
    console.log("Descripción: "+this.descripcion);
    console.log("Tipo de Suscripcion: "+this.tipoSuscripcion);
    console.log("Ciudad de Residencia: "+this.ciudad);
    console.log("Direccion: "+this.direccion);
    console.log("Telefono: "+this.telefono);
    console.log("Celular: "+this.celular);
    console.log("Nacionalidad: "+this.nacionalidad);
    console.log("Genero:");
    console.log(" - Masculino: "+this.masculino);
    console.log(" - Femenino: "+this.femenino);
    console.log("Tipo de Pago:");
    console.log(" - Efectivo: "+this.efectivo);
    console.log(" - Credito: "+this.credito);
  },

  asignarValores:function(){


    /*this.direccion=document.querySelector(".nombre").value,



    this.genero= document.getElementByName("genero").checked,
    this.tipoPago= document.getElementByName("tipo_pago").checked*/
  }
}

document.getElementById('submit1').addEventListener('click', function(){

  Usuario.nombre_completo=document.getElementsByClassName("nombre")[0].value,
  Usuario.nombre_usuario= document.getElementsByClassName("nombre_usuario")[0].value,
  Usuario.contrasena= document.getElementsByClassName("password")[0].value,

  Usuario.email= document.getElementsByName("email")[0].value,
  Usuario.fecha_nacimiento=document.getElementsByName("fecha_nacimiento")[0].value,
  Usuario.descripcion= document.getElementsByName("descripcion")[0].value,

  tipoSuscripcionTag = document.getElementsByTagName("select")
  Usuario.tipoSuscripcion= tipoSuscripcionTag[0].value,
  ciudadTag=document.getElementsByTagName("input")
  Usuario.ciudad= ciudadTag[6].value

  Usuario.direccion= document.querySelector("input[name='direccion']").value,
  Usuario.telefono= document.querySelector("input[name='telefono']").value,

  Usuario.celular= document.querySelectorAll("input[name='celular']")[0].value,
  Usuario.nacionalidad= document.querySelectorAll("input[name='nacionalidad']")[0].value,

  Usuario.masculino=document.getElementById("masculino").checked,
  Usuario.femenino=document.getElementById("femenino").checked,
  Usuario.efectivo=document.getElementById("efectivo").checked,
  Usuario.credito=document.getElementById("credito").checked,

  Usuario.imprimirDatos();
})
