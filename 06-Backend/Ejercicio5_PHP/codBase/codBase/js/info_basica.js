$(function(){
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

  $(".desc-form").submit(function(event){
    $.ajax({
      url: "info_basica.php",
      type: "POST",
      data: {
        nombre: $("input[name='nombre']").val(),
        apellido: $("input[name='apellido']").val(),
        tipo_id: $("select[name='tipo_id']").val(),
        identificacion: $("input[name='identificacion']").val(),
        fecha_nacimiento: $("input[name='fecha_nacimiento']").val(),
        genero: $("input[name='genero']").val(),
        estado_civil: $("select[name='estado_civil']").val(),
        tipo_telefono: $("select[name='tipo_telefono']").val(),
        telefono: $("input[name='telefono']").val(),
        pais: $("input[name='pais']").val(),
        ciudad: $("input[name='ciudad']").val(),
        profile_img: $("input[name='profile-img']").val(),
      }
    }).done(function(data){
      alert(data);
    })
  })
})
