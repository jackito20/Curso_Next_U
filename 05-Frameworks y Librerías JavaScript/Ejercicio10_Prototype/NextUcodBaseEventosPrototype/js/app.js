
function bloqueHandler(){
  if ($('activarJuego').getValue()=='on') {

      $('tablero').observe('click', function(event){
        var bloqueClickeado = event.findElement();
        bloqueClickeado.down().show();
        if (check2Clicks()) {
          $('tablero').stopObserving('click');
          if(!iguales()){
            hideAll.delay(1);
          }else{
            deleteBlock.delay(1);
          }
        }
      })
  }else{
    reiniciar();
    $('tablero').stopObserving('click');
    
  }
}

function iguales(){
  var mostrados = getMostrados();
  if(mostrados[0].src==mostrados[1].src){
    console.log("iguales")
    console.log(mostrados[0].src+" "+mostrados[1].src);
    return true;
  }
  return false;
}

function deleteBlock(){
  var mostrados = getMostrados();
  console.log("iguales")
  console.log(mostrados[0]);
  console.log(mostrados[1]);

  mostrados[0].hide();
  mostrados[1].hide();

  mostrados[0].up().removeClassName("cuadro");
  mostrados[0].up().addClassName("cuadroExito");

  mostrados[1].up().removeClassName("cuadro");
  mostrados[1].up().addClassName("cuadroExito");

  bloqueHandler()
}

function reiniciar(){
  $$('.contenido').each(function(item, index){
    item.up().removeClassName("cuadroExito");
    item.up().addClassName("cuadro");
    item.hide();
  });
}

document.observe("dom:loaded", function(){
  hideAll();
  bloqueHandler();
  $('activarJuego').observe('change', bloqueHandler);


})





//Estas funciones no hay que codificarlas durante la captura, ya deben estar creadas antes de capturar

function hideAll(){
  $$('.contenido').each(function(item){
    item.hide();
    bloqueHandler()
  })
}

function check2Clicks(){
  if (getMostrados().length==2) {
    return true;
  }else return false;
}

function getMostrados(){
  var imgMostradas = new Array()
  var i = 0;
  $$('.contenido').each(function(item, index){
    if(item.visible()){
      imgMostradas[i]=item;
      i++;
    }
  });
  return imgMostradas;
}
