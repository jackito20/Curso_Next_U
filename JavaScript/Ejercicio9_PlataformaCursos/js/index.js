function changeBackground(elemento){
    elemento.style.background = "#4d62d0";
    if (elemento.children[0]) {
      elemento.children[0].style.background = "inherit";
    }
}

function changeBackgroundOther(elemento){
  elemento.style.background = "#149c5f";
  if (elemento.children[0]) {
    elemento.children[0].style.background = "inherit";
  }
}

function changePanel(elemento){
  paneles = document.querySelectorAll("[class^='item-']");

  for(var index=0; index<paneles.length; index++){
    paneles[index].style.width="4%";
    paneles[index].style.backgroundColor="#4d62d0";
    /*elementoHijos=paneles[index].children;
    for(var i=0; i<elementoHijos.length; i++){
      elementoHijos[i].style.display="none";
    }*/
  }

  for (var i = 0; i < document.querySelectorAll("[class^='item-'] *").length; i++) {
    document.querySelectorAll("[class^='item-'] *")[i].style.display = "none";
  }

  elemento.style.width ="96%";
  elemento.style.backgroundColor="white";
  elementoHijos=elemento.children;
  for(var i=0; i<elementoHijos.length; i++){
    elementoHijos[i].style.display="block";
  }
}

function changeWidth(elemento){
  elemento.style.width="18%";
}


function changeWidthOther(elemento){
  elemento.style.width="20%";
}

function changeLetterSmall(){
  document.querySelectorAll("[class^='item-'] h1")[0].style.fontSize="small";
  document.querySelectorAll("[class^='item-'] h1")[1].style.fontSize="small";
  document.querySelectorAll("[class^='item-'] h1")[2].style.fontSize="small";
}

function changeLetterLarge(){
  document.querySelectorAll("[class^=item-] h1")[0].style.fontSize="xx-large";
  document.querySelectorAll("[class^=item-] h1")[1].style.fontSize="xx-large";
  document.querySelectorAll("[class^=item-] h1")[2].style.fontSize="xx-large";
}




function desactivarSonido(){
  var elementoRadio = document.getElementById("speaker-radio");
  elementoRadio.checked="true";

  var elementoRadio = document.getElementById("speaker");
  elementoRadio.children[0].setAttribute("src", "img/mute.png");
}

function activarSonido(){
  var elementoRadio = document.getElementById("speaker-radio");
  elementoRadio.checked="false";

  var elementoRadio = document.getElementById("speaker");
  elementoRadio.children[0].setAttribute("src", "img/speaker.png");
}

function anadirContenedor(){
  /*var containerSaludo = document.createElement("div");
  containerSaludo.className = "container-saludo";
  containerSaludo.style.order="2";*/

  var containerSaludo = document.getElementsByClassName("container-saludo")[0];
  var nombre = document.getElementsByName("nombre")[0].value;
  var nombreH2 = document.createElement("h2");
  nombreH2.innerHTML=nombre;
  containerSaludo.appendChild(nombreH2);

  /*document.getElementsByClassName("top-row")[0].appendChild(containerSaludo);*/
}

function parrafo(elementoPadre){
  var parrafo = document.createElement("p");
  parrafo.innerHTML = "Este es el parrafo que se creo";
  elementoPadre.appendChild(parrafo);
}

function texto(elemento, texto){
  elemento.innerHTML=texto;
}

/*var botonNombre = document.getElementsByClassName('boton-check')[0];
botonNombre.addEventListener("click",function(event){
  anadirContenedor();
})*/

/*var botonHome = document.getElementById('home');
botonHome.addEventListener("click",function(event){
  document.getElementsByClassName("myModal").style.display="block";
})
function changePanel(elemento){
*/

var Evento = {

  iniciar: function(){
    this.eventosBotones('boton-accion');
    this.eventosBotones('boton-next');
    this.eventoBloque();
    document.onkeypress = this.mute;
    document.getElementById("increase-font").onclick=this.aumentarTamano;
    document.getElementById("decrease-font").onclick=this.disminuirTamano;
    document.getElementsByClassName("boton-check")[0].onclick=this.mostarTexto;
  },

  mostarTexto: function(event){
      anadirContenedor();
  },

  aumentarTamano: function(event){

    changeLetterLarge()
  },
  disminuirTamano: function(event){
    changeLetterSmall()
  },

  mute: function(event){
    var tecla = event.which || event.keyCode;
    if(String.fromCharCode(tecla)=="0"){
      desactivarSonido()
    }else if(String.fromCharCode(tecla)=="9"){
      activarSonido();
    }
  },

  eventoBloque: function(){
    elementos=document.querySelectorAll("[class^='item-']");

    for(var i=0; i<elementos.length; i++){

      elementos[i].onclick=this.activarContenido;
      elementos[i].ondblclick=this.activarParrafo;
    }
  },

  activarParrafo: function(event){
    parrafo(event.target);
  },

  activarContenido: function(event){
    changePanel(event.target);
  },

  eventosBotones: function(selector){
    elementos=document.getElementsByClassName(selector);
    for(var i=0; i<elementos.length; i++){
      elementos[i].onmouseover=this.changeBackgroundEvent;
      elementos[i].onmouseout=this.changeBackgroundOtherEvent;
    }
  },

  changeBackgroundEvent:function(event){
    changeBackground(event.target);
  },

  changeBackgroundOtherEvent:function(event){
    changeBackgroundOther(event.target);
  }

}

Evento.iniciar();
