
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
    
    elementoPrev =  $(".selected-item").prev().length !=0 ? $(".selected-item").prev() : null;
    elementoNext =  $(".selected-item").next().length != 0 ? $(".selected-item").next() : null;
    
    elementoEliminado= $(".selected-item").detach();
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

  $(".check").on("click", function(){
    
    console.log($(this));
    if($(this).is(':checked')){
      console.log("seleccionar");
      if(checkBoxs.length==2){
        checkBoxs[checkBoxs.length-1].checked = false;
        checkBoxs.pop();
        checkBoxs.push($(this)[0]);
      }else{
        checkBoxs.push($(this)[0]);
      }
      
    }else{
      console.log("desseleccionar");
      var pos = jQuery.inArray($(this)[0], checkBoxs );
      if(pos>=0){
        console.log(checkBoxs[pos]);
        checkBoxs.splice(pos,1);
      }
    }
    console.log(checkBoxs);

  });

  $("#reemplazar").on("click", function(){
    console.log("reemplazar");
    console.log(checkBoxs);

    var item1 = (checkBoxs[0].id.split("Check"))[0];
    var item2 = (checkBoxs[1].id.split("Check"))[0];

    var itemCheck1 = $("#"+checkBoxs[0].id).parent();
    var itemCheck2 = $("#"+checkBoxs[1].id).parent();

    
    item1 = $("#"+item1);
    item2 = $("#"+item2);

    var tmp=item1;
    var prevItem2 = item2.prev();

    var tmpCheck=itemCheck1;
    var prevCheckItem2 = itemCheck2.prev();

    if(!prevItem2.length){
      tmp = item2;
      item2 = item1;
      item1 = tmp;

      tmp=item1;
      prevItem2 = item2.prev();

      tmpCheck = itemCheck2;
      itemCheck2 = itemCheck1;
      itemCheck1 = tmpCheck;

      tmpCheck=itemCheck1;
      prevCheckItem2 = itemCheck2.prev();
    }

    if(item1[0]==prevItem2[0]){
      console.log("iguales");
      prevItem2=item2;
      prevCheckItem2 = itemCheck2;
    }

    $("#"+item1.attr("id")).replaceWith(item2);
    $("#"+prevItem2.attr("id")).after(tmp);

    console.log("////////");
    console.log(itemCheck1);
    console.log(itemCheck2);
    $(itemCheck1).replaceWith(itemCheck2);
    console.log(prevCheckItem2);
    console.log(tmpCheck);
    $(prevCheckItem2).after(tmpCheck);

  });

  $("#filtro").change(function(){
    //alert("cambio "+$(this).val());
    if($(this).val()=="nombre"){
      var nombres = Array();
      var array = $(".title");
      
      for(i=0;i<array.length; i++){
        nombres.push($(array[i]).text());
      }
      console.log(nombres);
      nombres.sort();
      console.log(nombres);

      console.log(array);
      
      var item1, item2, itemCheck1, itemCheck2;

      for(i=0;i<nombres.length; i++){
        if($(array[i]).text()==nombres[i]){
          console.log("paso "+nombres[i]+" "+i);
          continue;
        }else{
          console.log("cambiar "+nombres[i]+" "+$(array[i]).text()+" "+i);

          item1=$(array[i]).parent();
          item2=$("span:contains('"+nombres[i]+"')").parent();
          console.log(item1.attr("id"));
          console.log(item1);
          console.log(item2.attr("id"));
          console.log(item2);

          reemplazar(item1, item2);

          itemCheck1 = $("#"+item1.attr("id")+"Check").parent();
          itemCheck2 = $("#"+item2.attr("id")+"Check").parent();

          console.log("--check");
          console.log(itemCheck1);
          console.log(itemCheck2);

          reemplazar(itemCheck1, itemCheck2);
          array = $(".title");
        }
      }
    }
  });

  
});

function reemplazar(item1, item2){
  prevItem2 = item2.prev();
  console.log(prevItem2);

  if(item1[0]==prevItem2[0]){
    console.log("iguales");
    prevItem2=item2;
  }
  tmp=$(item1).replaceWith(item2);
  console.log(tmp);
  $(prevItem2).after(tmp);

}