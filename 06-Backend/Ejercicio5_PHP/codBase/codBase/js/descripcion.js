$(document).ready(function() {
    $('select').material_select();

    $('.preloader-wrapper').hide()
    $( document ).ajaxStart(function() {
      $( ".preloader-wrapper" ).show();
    });
    $( document ).ajaxStop(function() {
      $( ".preloader-wrapper" ).hide();
    });

    $(".desc-form").submit(function(event){
      $.ajax({
        url: "descripcion.php",
        type: "POST",
        data: {
          descripcion: $("#descripcion").val(),
          categoria: $("#categoria").val()
        }
      }).done(function(data){
        alert(data);
      })
    });

});
