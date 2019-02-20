$(function(){
    tituloBlanco($(".main-titulo"));
    /*$(".main-titulo").animate(
        {
            color: "white"
        },1000, function(){
            tituloAmarillo($(this));
        }
)*/
})

function tituloAmarillo(){
    console.log($(".main-titulo"));
    $(".main-titulo").animate(
        {
            color: "yellow"
        },1000,
        function(){
            tituloBlanco();
        }
    )
}

function tituloBlanco(){
    console.log($(".main-titulo"));
    $(".main-titulo").animate(
        {
            color: "white"
        },1000,
        function(){
            tituloAmarillo();
        }
    )
}