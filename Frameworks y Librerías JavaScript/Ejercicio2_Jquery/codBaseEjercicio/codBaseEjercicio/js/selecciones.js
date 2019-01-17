$( document ).ready(function() {
  $("body").click(function(){
    //Realiza las selecciones en este bloque de código
    //$("h1").find(":contains('We love to tell your story')").css("color","yellow");
    $("h1").css("color","yellow");
    $("li").find(":contains('Home')").css("color","yellow");
    $(".icon-arrow-down2").css("color","yellow");
    $("img[src='images/pic_2.jpg']+a").find(":contains('15 images')").css("color","yellow");
    $("div[data-section='about'] div:nth-child(2)").find("h2:contains('Jean Smith') ~ p").css("color","yellow");
    $("#fh5co-contact div div div p a").css("color","yellow");
    $("cite").css("color","yellow");
    console.log($("#fh5co-contact div div div p a"));
  });
});
