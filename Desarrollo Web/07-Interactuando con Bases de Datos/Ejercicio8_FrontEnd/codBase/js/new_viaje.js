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
   //$(`#ciudad_destino option:contains(${selected})`).attr('disabled', 'disabled');
   $("#ciudad_destino").material_select();
 })

 $('form').on('submit', function(event){
    event.preventDefault();
    getFormData();
 })

})


function getFormData(){
  var form_data = new FormData();
  form_data.append('ciudad_origen', $('#ciudad_origen').val());
  form_data.append('ciudad_destino', $('#ciudad_destino').val());
  form_data.append('vehiculo', $('#vehiculo').val());
  form_data.append('conductor', $('#conductor').val());
  form_data.append('fecha_salida', $('#fecha_salida').val());
  form_data.append('hora_salida', $('#hora_salida').val());
  sendForm(form_data);
}

function sendForm(form_data){
  $.ajax({
    url: "server/add_viaje.php",
    dataType: "json",
    cache: false,
    processData: false,
    contentType: false,
    data: form_data,
    type: 'POST',
    success: function(php_response){
      if (php_response.msg == "OK") {
        alert("Se ha añadido el viaje con éxito");
        window.location.href = 'welcome.html';
      }else {
        alert(php_response.msg);
      }
    },
    error: function(){
      alert("error en la comunicación con el servidor");
    }
  })
}

function getData(){
  $.get( "server/get_data.php", function( data ) {
    console.log(data);
    
    data.ciudades.data.forEach(ciudad => {
      $("#ciudad_origen").append(`<option value="${ciudad.id}">${ciudad.nombre}</option>`)
      $("#ciudad_destino").append(`<option value="${ciudad.id}">${ciudad.nombre}</option>`)
    });

    data.vehiculos.data.forEach(vehiculo => {
      $("#vehiculo").append(`<option value="${vehiculo.placa}">${vehiculo.placa} (${vehiculo.fabricante} ${vehiculo.referencia})</option>`)
    });

    data.usuarios.data.forEach(usuario => {
      $("#conductor").append(`<option value="${usuario.id}">${usuario.nombre}</option>`)
    });


  }, 'json').always(function(){
    $('.selector').material_select();
  });
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

