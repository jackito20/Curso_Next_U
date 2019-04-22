var calendario = document.getElementById('calendario');
calendario.addEventListener("click",function(event){
  var mensaje="Hiciste Click en la posición -> X:"+event.clientX+" Y:"+event.clientY;
  console.log(mensaje);
})
