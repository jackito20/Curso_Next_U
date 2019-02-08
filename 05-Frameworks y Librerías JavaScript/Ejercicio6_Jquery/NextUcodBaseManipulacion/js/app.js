
//Document.Ready
$(function(){

  //Inicializador del elemento select de materialize css
  $('select').material_select();
  var elementoEliminado;
  var elementoPrev;
  var elementoNext;
  var checkBoxs = [];

  //Evento para cambiar de color al item seleccionado
  $(".elemento-tabla .collection-item").on("click",function(){
    $(".collection-item").removeClass("selected-item");
    $(this).toggleClass("selected-item");
    var checkAsociadoId= $(this).attr("id")+"Check";
    $("#"+checkAsociadoId).parent().toggleClass("selected-item");
  });

  $("#borrar").on("click", function(){
    idElemento = $(".selected-item").attr("id");
    /*console.log("longitud");
    console.log($(".selected-item").prev().length);
    console.log($(".selected-item").next().length);*/
    
    elementoPrev =  $(".selected-item").prev().length !=0 ? $(".selected-item").prev() : null;
    elementoNext =  $(".selected-item").next().length != 0 ? $(".selected-item").next() : null;
    /*console.log(elementoPrev);
    console.log(elementoNext);
    console.log(idElemento);*/
  
    //elementoEliminadoCh=$("#"+idElemento+"Check").parent();
    //console.log(elementoEliminadoCh);
    
    //elementoChPrev = elementoEliminadoCh.prev() ? elementoEliminadoCh.prev() : null;
    //elementoChNext = elementoEliminadoCh.next() ? elementoEliminadoCh.next() : null;
    /*console.log(elementoChPrev);
    console.log(elementoChNext);*/

    elementoEliminado= $(".selected-item").detach();
    //elementoEliminadoCh=elementoEliminadoCh.detach();
  });

  $("#deshacer").on("click", function(){
    console.log(elementoEliminado);
    console.log(elementoPrev);
    console.log(elementoNext);
    

    if(elementoPrev!=null){
      $(elementoPrev[0]).after(elementoEliminado[0]);
      $(elementoPrev[1]).after(elementoEliminado[1]);
    }else if(elementoNext!=null){
      $(elementoNext[0]).before(elementoEliminado[0]);
      $(elementoNext[1]).before(elementoEliminado[1]);
    }
  });

  $(".check").change(function(){
    
    if($(this).is(':checked')){
      console.log("checqueado")

      $(this).checked = false;

      console.log( $(this));
      
      if($(this).is(':checked')){
        console.log( "NO");
      }
      /*if(checkBoxs.length==2){
        console.log(checkBoxs[1]);
        $(this).checked=false;
        if(checkBoxs[1].is(':checked')){
          console.log("cambiar");
        }
        console.log(checkBoxs[1].att);
        checkBoxs.pop();
      }
      checkBoxs.push($(this));
      console.log(checkBoxs);*/
    }else{

    }

  });

})
