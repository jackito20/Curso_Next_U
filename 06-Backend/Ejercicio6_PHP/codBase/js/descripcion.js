$(document).ready(function() {
    $('select').material_select();

    $('.preloader-wrapper').hide()
    $( document ).ajaxStart(function() {
      $( ".preloader-wrapper" ).show();
    });
    $( document ).ajaxStop(function() {
      $( ".preloader-wrapper" ).hide();
    });

    $(".desc-form").submit(functio(e){
      $.ajax({
        url: "./descripcion.php",
        type: "POST",
        data: {
          categoria: $("#categoria").val(),
          descripcion: $("$descripcion").val()
        }
      }).done(function(data){
        console.log(data);
      })
    });

});
