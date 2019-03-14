$(document).ready(function() {
    iniciar();
    $('select').material_select();

    $('.preloader-wrapper').hide()
    $( document ).ajaxStart(function() {
      $( ".preloader-wrapper" ).show();
    });
    $( document ).ajaxStop(function() {
      $( ".preloader-wrapper" ).hide();
    });

    $(".desc-form").submit(function(e){
      $.ajax({
        url: "./descripcion.php",
        type: "POST",
        data: {
          categoria: $("#categoria").val(),
          descripcion: $("#descripcion").val()
        }
      }).done(function(data){
        console.log(data);
      })
    });

});


function iniciar(){
  $.ajax({
    url: "./checkSession.php",
    type: "GET",
    processData: false,
    dataType: "json"
  }).done(function(data){
    if(data=="false"){
      console.log(data);
      location.href ="./login.html";
    }else{
      console.log(data);
    }
  });
}
