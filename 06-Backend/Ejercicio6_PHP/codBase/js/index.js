$(document).ready(function() {
  iniciar();
  $('select').material_select();

 });

 function iniciar(){
  $.ajax({
    url: "./checkSession.php",
    type: "GET",
    processData: false,
    dataType: "json"
  }).done(function(data){
    if(data=="false"){
      location.href ="./login.html";
    }else{
      $(".nombre-user").html(data.nombre);
      $(".dropdown-button").append(data.nombre);
      if(data.profile_img!=""){
        $(".card-image img").attr("src", data.profile_img);
      }

      if(data.descripcion!=""){
        var icono = $(".states li")[0];
        $(icono).find("i").html("done");
        $(icono).find("i").attr("style", "color:blue");

        $(".card-panel p").html(data.descripcion);
      }

      if(data.id!=""){
        var icono = $(".states li")[1];
        $(icono).find("i").html("done");
        $(icono).find("i").attr("style", "color:blue");
      }

      if(data.hoja_vida!=""){
        var icono = $(".states li")[2];
        $(icono).find("i").html("done");
        $(icono).find("i").attr("style", "color:blue");
      }
    }
  });
 }
