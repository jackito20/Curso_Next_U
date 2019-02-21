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
  //console.log(columnas);
  for(var i=0; i<columnas.length; i++){
    //console.log("--------columna");
    //console.log(columnas[i]);
    //console.log("********imagenes");
    var elementos = $(columnas[i]).find("img");
    //console.log(elementos);
    for(var j=elementos.length-1; j>=0; j--){
      //console.log(elementos[j]);
      validarArriba(i, j);

    }
  }
}

function validarArriba(i, j){
  //console.log(" i "+i+" j "+j);
  columna=$(".panel-tablero div")[i];
  var elementos = [$(columna).find("img")[j], $(columna).find("img")[j-1], $(columna).find("img")[j-2]]
  /*elemento1=$(columnas).find("img")[j];
  elemento2=$(columnas).find("img")[j-1];
  elemento3=$(columnas).find("img")[j-2];*/
  //console.log(columnas);
  if(elementos[0] && elementos[1] && elementos[2]){
    /*console.log($(elementos[0]).attr("src"));
    console.log($(elementos[1]).attr("src"));
    console.log($(elementos[2]).attr("src"));*/
    if($(elementos[0]).attr("src") == $(elementos[1]).attr("src")
      && $(elementos[0]).attr("src") == $(elementos[2]).attr("src")){
        //console.log("DESAPARECER");
        desaparecer(elementos);
      }
  }else{
    /*console.log(elementos[0]);
    console.log("NO HAY HACIA ARRIBA");*/
  }
}

function desaparecer(elementos){
  for(i=0; i<3; i++){
    $(elementos[i]).hide(2000, function(){
      $(this).remove();
      agregarQuitados();
    });
  }
}

function agregarQuitados(){
  columnas=$(".panel-tablero div");
  console.log("AGREGAR QUITADOS");
  for(var i=0; i<columnas.length; i++){
    console.log(columnas[i]);
    elementos = $(columnas[i]).find("img");
    console.log(elementos);
    console.log(elementos.length);
  }

  /*for(i=0; i<cant; i++){
    console.log("/////Agregar");
    console.log(columna);
    agregarAleatorio(columna);
    alert("agrego");
  }*/
}
