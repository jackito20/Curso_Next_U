$(function(){
  $('.datepicker').pickadate({
     selectMonths: true,
     format: 'yyyy-mm-dd'
   });

 $('.timepicker').timepicker({
   timeFormat: 'H:mm',
   interval: 30,
   minTime: '5',
   maxTime: '9:00pm',
   defaultTime: '11',
   startTime: '5:00',
   dynamic: false,
   dropdown: true,
   scrollbar: true
 });
 getData();
 $('#logout').click(function(){
   logoutRequest();
 })

 $('#ciudad_origen').on('change', function(){
   var selected = $('#ciudad_origen option:selected').text();
   $(`#ciudad_destino option:contains(${selected})`).attr('disabled', 'disabled');
   $("#ciudad_destino").material_select();
 })

 $('form').on('submit', function(event){
   event.preventDefault();

 })

})

function getData(){
  $.get( "server/get_data.php", function( data ) {
    console.log(data.ciudades);
    
    data.ciudades.data.forEach(ciudad => {
      $("#ciudad_origen").append(`<option value="${ciudad.id}">${ciudad.nombre}</option>`)
      $("#ciudad_destino").append(`<option value="${ciudad.id}">${ciudad.nombre}</option>`)
    });
  }, 'json');
}

function logoutRequest(){
 $.ajax({
   url: 'server/logout.php',
   dataType: "text",
   cache: false,
   processData: false,
   contentType: false,
   type: 'GET',
   success: function(php_response){
     window.location.href = 'index.html';
   },
   error: function(){
     alert("error en la comunicación con el servidor");
   }
 })
}