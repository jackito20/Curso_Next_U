/*-- FUNCIONES PROPIAS DE LA VISTA --*/
function showNewSearch(){
  $('.back-container').delay(2000).show('slide', { direction: "right" }, 500);
}

function newSearchEvent(){
  $('input[type="text"]').val('');
  $('html, body').animate(
    {
      scrollTop: 0
    },1300, function(){$('.back-container').hide()});
}

/*-- ----------------------------- --*/

function submitAction(){
  var nombre = $('input[type="text"]').val();
  console.log(nombre);
  var url=" https://gateway.marvel.com/v1/public/characters?ts=1&apikey=1cd5d03219d013452971b25b4162136a&hash=cb8ebaf4e043b633c291d137ec7f66c5";

  $.ajax({
    url: url,
    type: 'GET',
    data: {
      name: nombre
    },
    complete: function(response){
      console.log(response);
      //console.log(xhr.responseJSON.status)
      appendHTML(response);
    }
  })
}


/* Función appendHTML que recibe la respuesta de la API como parámetro*/
function appendHTML(response){

  

  $(".nombre").html(response.responseJSON.data.results[0].name);
  $("#descripcion").text(response.responseJSON.data.results[0].description);
  $("#image").attr("src", response.responseJSON.data.results[0].thumbnail.path+"."+response.responseJSON.data.results[0].thumbnail.extension);
  console.log(response.responseJSON.data.results[0]);
  var comics = response.responseJSON.data.results[0].comics.items;
  $.each(comics, function(index, element){
    $("#comics").append("<li>"+element.name+"</li>");
  })

  var series = response.responseJSON.data.results[0].series.items;
  $.each(series, function(index, element){
    $("#series").append("<li>"+element.name+"</li>");
  })

  var stories = response.responseJSON.data.results[0].stories.items;
  $.each(stories, function(index, element){
    $("#stories").append("<li>"+element.name+"</li>");
  })

  var events = response.responseJSON.data.results[0].events.items;
  $.each(events, function(index, element){
    $("#events").append("<li>"+element.name+"</li>");
  })



/*-- ANIMACIÓN PROPIA DE LA VISTA, NO MODIFICAR --*/
  $('html, body').animate(
    {
      scrollTop: $("#page2").offset().top
    },1300, showNewSearch);
/*-- ------------------------------------------ --*/
}


/* FUNCIÓN DOCUMENT.READY */
$(function(){
  $(window).scrollTop(0)
  $('input[type="text"]').val('');
  $('.back-container').click(newSearchEvent);
  $('.character-form').submit(submitAction);

})
