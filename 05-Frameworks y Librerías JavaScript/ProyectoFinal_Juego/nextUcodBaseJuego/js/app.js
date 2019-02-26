var elementosIguales = [];
var pararParpadeo, pararValidarIguales;

$(function(){
    tituloBlanco($(".main-titulo"));
    reiniciarTablero();
    pararValidarIguales = setInterval(validarIguales, 5000);
    //validarIguales();
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
      $(columnas[i]).append("<img src='image/"+img+".png' class='elemento'>");
    }
  }
}

function validarIguales(){
  var mov = $("#movimientos-text").text();
  console.log("//////MOVIEMIENTOS "+mov++);
  elementosIguales =[];
  $("#movimientos-text").text(mov++);
  
  var columnas=$(".panel-tablero div");
  var elementosEliminar = [];
  for(var i=0; i<columnas.length; i++){
    var elementos = $(columnas[i]).find("img");

    for(var j=elementos.length-1; j>=0; j--){
      var validadosArriba = validarArriba(i, j);
      var validadosDerecha = validarDerecha(i, j);
      if(validadosArriba){
        j=validadosArriba;
      }
    }
  }

  console.log("VALIDADOS");
  console.log(elementosIguales);

  if(elementosIguales.length>0){
    var par = setInterval(parpadear, 300);
    pararParpadeo =par;
    setTimeout(stopParpadear, 2000);
    setTimeout(desaparecer, 3100);
  }else{
    stopValidarIguales();
  }
}

function stopParpadear(){
  clearInterval(pararParpadeo);
}

function stopValidarIguales(){
  clearInterval(pararValidarIguales);
}

function validarArriba(i, j){
  
  columna=$(".panel-tablero div")[i];

  var elementos = [$(columna).find("img")[j], $(columna).find("img")[j-1], $(columna).find("img")[j-2]]
  
  if(elementos[0] && elementos[1] && elementos[2]){
    
    if($(elementos[0]).attr("src") == $(elementos[1]).attr("src")
      && $(elementos[0]).attr("src") == $(elementos[2]).attr("src")){

        for(var x=j; x<7; x--){
          var img = $(columna).find("img")[x];
          if( $(img).attr("src") == $(elementos[0]).attr("src")){
            elementosIguales.push(img);
          }else{
            break;
          }
        }
        //parpadear(elementos, 7);
        return x;
      }
  }

  return false;
}

function validarDerecha(i, j){
  
  columnas=$(".panel-tablero div");

  var elementos = [$(columnas[i]).find("img")[j], $(columnas[i+1]).find("img")[j], $(columnas[i+2]).find("img")[j]]
  
  if(elementos[0] && elementos[1] && elementos[2]){
    
    if($(elementos[0]).attr("src") == $(elementos[1]).attr("src")
      && $(elementos[0]).attr("src") == $(elementos[2]).attr("src")){

        for(var x=i; x<7; x++){
          var img = $(columnas[x]).find("img")[j];
          if( $(img).attr("src") == $(elementos[0]).attr("src")){
            elementosIguales.push(img);
          }else{
            break;
          }
        }
        //parpadear(elementos, 7);
        return j;
      }
  }

  return false;
}

/*function validarDerecha(i, j){
  
  columnas=$(".panel-tablero div");
  var elementos = [$(columnas[i]).find("img")[j], $(columnas[i+1]).find("img")[j], $(columnas[i+2]).find("img")[j]]
  
  if(elementos[0] && elementos[1] && elementos[2]){
    
    if($(elementos[0]).attr("src") == $(elementos[1]).attr("src")
      && $(elementos[0]).attr("src") == $(elementos[2]).attr("src")){
        //console.log($(elementos[0]).parent())
        //console.log(elementos);
        console.log(elementos);
        parpadear(elementos, 5);
        return true;
      }
  }

  return false;
}*/

function parpadear(){
  $(elementosIguales).fadeToggle(400, function(){
    
  });
}

function desaparecer(){

  var agregados = [];
  
    $(elementosIguales)
      .hide({
        duration: 500,
        start: function(){
          var padre = $(this).parent()
          agregados.push(agregarQuitados(padre))
          var punt = parseInt($("#score-text").text());
          $("#score-text").text(punt+10)
        },
        step: function(){
          for(var i=0; i<agregados.length; i++){
            $(agregados[i]).show(500, function(){
              agregados.shift();
            });
          }
        },
        complete: function(){
          $(this).remove();
        }
      });
}

/*function parpadear(elemento, t){
  t--;
  var ap=0;
  var agregados = [];
  if(t>0){
    $(elemento).fadeToggle(300, function(){
      parpadear($(this), t);
    })
  }else{
    $(elemento)
      .hide({
        duration: 1000,
        start: function(){
          var padre = $(this).parent()
          
          agregados.push(agregarQuitados(padre))
          
          ap=0
        },
        step: function(){
          for(var i=0; i<agregados.length; i++){
            $(agregados[i]).show(1000, function(){
              agregados.shift();
            });
          }
        },
        complete: function(){
          $(this).remove().delay(1000);
        }
      });
  }
}*/

function agregarQuitados(columna){
  
  elemento=$(columna).find("img")[0];
  var img = Math.floor(Math.random()*(4-1+1))+1;
  var elementoAg = $("<img src='image/"+img+".png' class='elemento' style='display:none'>").insertBefore(elemento);
  return elementoAg;
  
}
