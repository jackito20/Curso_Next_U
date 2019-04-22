$(function(){
  iniciar();
  $('select').material_select();
  $('.datepicker').pickadate({
  selectMonths: true,
  selectYears: 200,
  months_full: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
  months_short: [ 'En', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ],
  weekdays_full: [ 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado' ],
  weekdays_short: [ 'Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab' ],
});
  $('.preloader-wrapper').hide()
  $( document ).ajaxStart(function() {
    $( ".preloader-wrapper" ).show();
  });
  $( document ).ajaxStop(function() {
    $( ".preloader-wrapper" ).hide();
  });


  $(".desc-form").submit(function(e){
    /*var filedata = $(this).find("input[name='profile-img']").prop("files")[0];
    console.log(filedata);
    var form_data = new FormData();
    form_data.append("file", filedata);*/

    var form_data = getInfoForm();

    $.ajax({
      url: "./info_basica.php",
      type: "post",
      dataType: "json",
      contentType: false,
      processData: false,
      data: form_data,
      success: function(data){
        if(data.profile_img){
          console.log(data.profile_img);
          $(".card-image img").attr("src", data.profile_img);
        }
        
      },
      error: function (xhr, thrownError) {
        console.log(xhr.responseText);
        console.log(thrownError);
      }
    })
  })
})

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
      console.log(data);
    }
  });
}

function getInfoForm(){
  var form_data = new FormData();
  form_data.append('nombre', $("[name='nombre']").val());
  form_data.append('apellido', $("[name='apellido']").val());
  form_data.append('tipo_id', $("[name='tipo_id']").val());
  form_data.append('identificacion', $("[name='identificacion']").val());
  form_data.append('fecha_nacimiento', $("[name='fecha_nacimiento']").val());
  form_data.append('genero', $("[name='genero']").val());
  form_data.append('estado_civil', $("[name='estado_civil']").val());
  form_data.append('tipo_telefono', $("[name='tipo_telefono']").val());
  form_data.append('telefono', $("[name='telefono']").val());
  form_data.append('pais', $("[name='pais']").val());
  form_data.append('ciudad', $("[name='ciudad']").val());
  form_data.append('profile_img', $("[name='profile-img']").prop('files')[0]);
  return form_data;
}