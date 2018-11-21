function mostrar_techa(event){
  var tecla = event.wichc || event.keyCode;
  document.querySelector("#tarjeta_muestra_tecla #texto_tarjeta").innerHTML="Presionaste "+String.fromCharCode(tecla);
}
