$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>=200){
            $(".fondo").css("background-image", "url('../img/background2.jpg')");
        }
    });
});