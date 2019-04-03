var elementosIguales = [];
var pararParpadeo, pararValidarIguales;
var tiempoValidarIguales = 1200;
var intervaloParpadear = 100;
var tiempoParpadear = 600;
var tiempoParpadeo = 300;
var tiempoIniciar = 300;
var tiempoMoviemiento = 200;
var tiempoDesaparecer = 400;

$(function(){
    tituloBlanco($(".main-titulo"));
    reiniciarTablero();
    $(".btn-reinicio").click(function(){
      if($(".btn-reinicio").html()=="Iniciar"){
        $(".btn-reinicio").html("Reiniciar");
        inicio();
        iniciar();
      }else{
        location.reload();
      }
     
    })
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

function iniciar(){
  reiniciarMovimientos();
  validarIguales();
  pararValidarIguales = setInterval(validarIguales, tiempoValidarIguales);
  

}

function reiniciarMovimientos(){
  columnas=$(".panel-tablero div");
    for(var i=0; i<columnas.length; i++){
      elementos = $(columnas[i]).find("img");

      for(var j=0; j<elementos.length; j++){
          $(elementos[j]).draggable({ disabled: true });
          $(elementos[j]).droppable({ disabled: true });
      }
    }
}

function validarIguales(){
  
  elementosIguales =[];
  
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

  ordenarElementosIguales();

  if(elementosIguales.length>0){
    pararParpadeo = setInterval(parpadear, intervaloParpadear);
    setTimeout(stopParpadear, tiempoParpadear);
  }else{
    stopValidarIguales();
    movimiento();
  }
}

function movimiento(){
  columnas=$(".panel-tablero div");
    for(var i=0; i<columnas.length; i++){
      elementos = $(columnas[i]).find("img");

      for(var j=0; j<elementos.length; j++){
        
        $(elementos[j]).draggable({
          disabled: false,
          revert: "invalid",
          containment: ".panel-tablero", 
          scroll: false,
          grid: [ 100, 100 ],
          drag: function() {
            
          }
        });
        $(elementos[j]).droppable({
          disabled: false,
          classes: {
            "ui-droppable-hover": "ui-state-hover"
          },
          accept: function(ui){
            if(validarDragArriba($(this), $(ui)) || validarDragAbajo($(this), $(ui)) || validarDragIzquierda($(this), $(ui)) || validarDragDerecha($(this), $(ui))){
              return true;
            }
            return false;
          },
          drop: function( event, ui ) {
            
            $($(ui.draggable)).css({
              left: "auto",
              top: "auto"
            });
            
            validarMovimiento($(this), $(ui.draggable));

            var movimientos = parseInt($("#movimientos-text").text());
            $("#movimientos-text").text(movimientos+1);
            
            setTimeout(iniciar, tiempoIniciar); 
          }
        });
      }
    }
}

function validarMovimiento(dropE, dragE){
  
  if(validarDragArriba($(dropE), $(dragE))){
    $(dropE).css({top: "+96px"})
    
    $(dropE).animate(
      {
      top: "-=96"
      },
      {
        done: cambiar($(dropE), $(dragE)),
        duration: tiempoMoviemiento
      }
    )
  
  }else if(validarDragAbajo($(dropE), $(dragE)) ){
    $(dropE).css({top: "-96px"})
    
    $(dropE).animate(
      {
      top: "+=96"
      },
      {
        done: cambiar($(dropE), $(dragE)),
        duration: tiempoMoviemiento
      }
    )

  }else if(validarDragIzquierda($(dropE), $(dragE)) ){
    $(dropE).css({left: "+99.4px"})
    
    $(dropE).animate(
      {
      left: "-=99.4"
      },
      {
        done: cambiar($(dropE), $(dragE)),
        duration: tiempoMoviemiento
      }
    )

  }else if(validarDragDerecha($(dropE), $(dragE)) ){
    $(dropE).css({left: "-99.4px"})
    
    $(dropE).animate(
      {
      left: "+=99.4"
      },
      {
        done: cambiar($(dropE), $(dragE)),
        duration: tiempoMoviemiento
      } 
    )
  }

}

function cambiar(dropE, dragE){
  if($(dropE).next().length!=0){
    if($(dragE).next().length!=0){
      var nueP = $(dropE).next();
      var nueP2 = $(dragE).next();
      $(nueP).before($(dragE));
      $(nueP2).before($(dropE));
    }else{
      var nueP = $(dropE).prev();
      $(nueP).after($(dragE));
    }
  }else{
    var nueP = $(dropE).prev();
    var nueP2 = $(dragE).prev();
    $(nueP).after($(dragE));
    $(nueP2).after($(dropE));
  }
}

function validarDragArriba(dropE, dragE){
  var className = $(dropE).parent().attr('class');
  if($(dragE).parent().hasClass(className)){
    if( $(dropE).index() - $(dragE).index() == 1){
      return true;
    }
  }
  return false;
}

function validarDragAbajo(dropE, dragE){
  var className = $(dropE).parent().attr('class');
  if($(dragE).parent().hasClass(className)){
    if( $(dragE).index() - $(dropE).index() == 1){
      return true;
    }
  }
  return false;
}

function validarDragIzquierda(dropE, dragE){
  var className = $(dropE).parent().attr('class');
  if(!$(dragE).parent().hasClass(className)){
    var res = className.split("col-");
    var indexDrop = parseInt(res[1]);
    
    className = $(dragE).parent().attr('class');
    res = className.split("col-");
    var indexDrag = parseInt(res[1]);
    
    if(  (indexDrop - indexDrag == 1 )   && ($(dropE).index() == $(dragE).index() ) ){
      return true;
    }
  }
  return false;
}

function validarDragDerecha(dropE, dragE){
  var className = $(dropE).parent().attr('class');
  if(!$(dragE).parent().hasClass(className)){
    var res = className.split("col-");
    var indexDrop = parseInt(res[1]);
    
    className = $(dragE).parent().attr('class');
    res = className.split("col-");
    var indexDrag = parseInt(res[1]);

    if(  (indexDrag - indexDrop == 1)   && ($(dropE).index() == $(dragE).index() ) ){
      return true;
    }
  }
  return false;
}

function stopParpadear(){
  clearInterval(pararParpadeo);
  desaparecer();
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
            if(validarElementosIguales(img, i, x)){
              elementosIguales.push(Array(img, i, x));
            }
          }else{
            break;
          }
        }
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
            if(validarElementosIguales(img, x, j)){
              elementosIguales.push(Array(img, x, j));
            }
          }else{
            break;
          }
        }
        return j;
      }
  }
  return false;
}

function validarElementosIguales(img, i, j){

  for(x=0; x<elementosIguales.length; x++){
    if(elementosIguales[x][1] == i && elementosIguales[x][2] == j){
      return false;
    }
  }

  return true;
}

function ordenarElementosIguales(){

  for(var i=0; i<elementosIguales.length; i++){
    elementosIguales[i] = elementosIguales[i][0];
  }
}

function parpadear(){
  $(elementosIguales).fadeToggle(tiempoParpadeo);
}

function desaparecer(){

  var agregados = [];
  var paso=0;

    $(elementosIguales)
      .hide({
        duration: tiempoDesaparecer,
        start: function(){
          var padre = $(this).parent()
          agregados.push(agregarQuitados(padre))
          var punt = parseInt($("#score-text").text());
          $("#score-text").text(punt+10);
        },
        progress : function(){
          $(agregados[paso]).show(tiempoDesaparecer);
          paso++;
        },
        complete: function(){
          $(this).remove();
        }
      });
}

function agregarQuitados(columna){
  
  elemento=$(columna).find("img")[0];
  var img = Math.floor(Math.random()*(4-1+1))+1;
  var elementoAg = $("<img src='image/"+img+".png' class='elemento' style='display:none'>").insertBefore(elemento);
  return elementoAg;
  
}

function finalizarJuego(){
  $(".panel-tablero").hide({
    duration: 1000,
    progress: function(){
      $(".panel-score").animate({
        width: "+=1000"
      },1400)
      $(".panel-score .time").hide(100);
    },
    complete: function(){
      $(".panel-score .fin-label").show(1100);
    }
  });
}