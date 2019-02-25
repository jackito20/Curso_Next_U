$(function(){
    tituloBlanco($(".main-titulo"));
    reiniciarTablero();
    validarIguales();
})

function tituloAmarillo(){
    $(".main-titulo").animate(
        {
            color: "yellow"
        },1000,
        function(){
            tituloBlanco();
        }
    )
}

function tituloBlanco(){
    $(".main-titulo").animate(
        {
            color: "white"
        },1000,
        function(){
            tituloAmarillo();
        }
    )
}

function reiniciarTablero(){

  var columnas=$(".panel-tablero div");

  for(var i=0; i<columnas.length; i++){
    for(var j=0; j<7; j++){
      var img = Math.floor(Math.random()*(4-1+1))+1;
      agregarAleatorio($(columnas[i]));
    }
  }

}

function agregarAleatorio(columna){
  var img = Math.floor(Math.random()*(4-1+1))+1;
  columna.append("<img src='image/"+img+".png' class='elemento'>");
}

function validarIguales(){
  var columnas=$(".panel-tablero div");
  var elementosEliminar = [];
  for(var i=0; i<columnas.length; i++){
    var elementos = $(columnas[i]).find("img");

    for(var j=elementos.length-1; j>=0; j--){
      var validados = validarArriba(i, j);
      if(validados){
        console.log("VALIDADOS EN COLUMNA "+i);
        j=j-2;
      }
    }
    
  }
}

function validarArriba(i, j){
  
  columna=$(".panel-tablero div")[i];
  var elementos = [$(columna).find("img")[j], $(columna).find("img")[j-1], $(columna).find("img")[j-2]]
  
  if(elementos[0] && elementos[1] && elementos[2]){
    
    if($(elementos[0]).attr("src") == $(elementos[1]).attr("src")
      && $(elementos[0]).attr("src") == $(elementos[2]).attr("src")){
        console.log("DESAPARECER");
        console.log("DESAPARECER ELEMENTOS columna ");
        console.log($(elementos[0]).parent())
        console.log(elementos);
        parpadear(elementos, 7);
        return true;
      }
  }else{
    /*console.log(elementos[0]);
    console.log("NO HAY HACIA ARRIBA");*/
  }
  return false;
}


function parpadear(elemento, t){
  t--;
  var ap=0;
  var agregados = [];
  $("#score-text").text(t);
  if(t>0){
    $(elemento).fadeToggle(300, function(){
      parpadear($(this), t);
    })
  }else{
    $(elemento)
      .hide({
        duration: 3000,
        start: function(){
          var padre = $(this).parent()
          
          agregados.push(agregarQuitados(padre))
          console.log("AGREGAR ELEMENTOS");
          console.log(agregados)
          ap=0
        },
        step: function(){
          for(var i=0; i<agregados.length; i++){
            $(agregados[i]).show(3000, function(){
              agregados.shift();
            });
          }
        },
        complete: function(){
          $(this).remove().delay(1000);
        }
      });
  }
}

function agregarQuitados(columna){
  
  elemento=$(columna).find("img")[0];
  
  var img = Math.floor(Math.random()*(4-1+1))+1;
  //var elementoAg = $("<img src='image/"+img+".png' class='elemento' style='display:none'>").insertBefore(elemento).hide().fadeIn('slow');
  
  var elementoAg = $("<img src='image/"+img+".png' class='elemento' style='display:none'>").insertBefore(elemento);
  
  //elementos=$(columna).find("img[style='display:none']");
  return elementoAg;
  //$(elementoAg).slideDown(1000);
}
