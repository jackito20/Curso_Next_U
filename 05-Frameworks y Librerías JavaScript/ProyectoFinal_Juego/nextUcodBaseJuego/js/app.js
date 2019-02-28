var elementosIguales = [];
var pararParpadeo, pararValidarIguales;

$(function(){
    tituloBlanco($(".main-titulo"));
    reiniciarTablero();
    //validarIguales();
    movimiento();
    $(".btn-reinicio").click(function(){
      if($(".btn-reinicio").html()=="Iniciar"){
        $(".btn-reinicio").html("Reiniciar");
        inicio();
        validarIguales();
        pararValidarIguales = setInterval(validarIguales, 4000);
        //finalizarJuego();
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

  ordenarElementosIguales();

  console.log("VALIDADOS ORDENADOS");
  console.log(elementosIguales);


  if(elementosIguales.length>0){
    var par = setInterval(parpadear, 300);
    pararParpadeo =par;
    setTimeout(stopParpadear, 2000);
    //setTimeout(desaparecer, 2000);
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
          revert: "invalid"
        });
        $(elementos[j]).droppable({
          classes: {
            "ui-droppable-hover": "ui-state-hover"
          },
          drop: function( event, ui ) {
            //deleteImage( ui.draggable );
            console.log(ui.draggable);
            console.log($(this));
            
            $(ui.draggable).css({
              left: "auto",
              top: "auto"
            });
            
            if($(this).next()){
              var nueP = $(this).next();
              if($(ui.draggable).next()){
                var nueP2 = $(ui.draggable).next();
                $(nueP).before($(ui.draggable));
                $(nueP2).before($(this));
              }else{
                var nueP2 = $(ui.draggable).prev();
                $(nueP).before($(ui.draggable));
                $(nueP2).before($(this));
              }
              
              
            }else{
              var nueP = $(this).prev();
              var nueP2 = $(ui.draggable).prev();
              $(nueP).after($(ui.draggable));
              $(nueP2).after($(this));
            }
            /*console.log($(ui.draggable));
            console.log(next);*/

            
            /*$(this).replaceWith(function(){
              
              var elem = $(this);
              if($(ui.draggable).next()){
                var next = $(ui.draggable).next();
                console.log(next);
                console.log(elem)
                //$(elem).insertBefore(next);
              }

              return ui.draggable;
            });*/

            //$(nue).replaceWith(elem);
             
            
          }
        });
        //console.log($(elementos[j]));
      }
    }
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
      console.log("Son Iguales "+x+" "+i+" "+j);
      console.log(img);
      console.log(elementosIguales[x]);
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
  $(elementosIguales).fadeToggle(400);
}

function desaparecer(){

  var agregados = [];
  var paso=0;

    $(elementosIguales)
      .hide({
        duration: 500,
        start: function(){
          var padre = $(this).parent()
          agregados.push(agregarQuitados(padre))
          var punt = parseInt($("#score-text").text());
          $("#score-text").text(punt+10);
        },
        progress : function(){
          console.log("AGREGADOS");
          console.log(paso);
          $(agregados[paso]).show(500);
          paso++;
          /*for(var i=0; i<agregados.length; i++){
            $(agregados[i]).show(500, function(){
              agregados.shift();
            });
          }*/
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