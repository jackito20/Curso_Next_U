$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>=200){
            $(".fondo").css("background-image", "url('img/background2.jpg')");
        }
    });

    $("#color-favorito").change(function(){
        var color= $(this).val();
        if(color=="azul")
            $(".cuadrado-color").css("background", "blue");
        else if(color=="verde")
            $(".cuadrado-color").css("background", "green");
        else if(color=="amarillo")
            $(".cuadrado-color").css("background", "yellow");
        else if(color=="rojo")
            $(".cuadrado-color").css("background", "red");
        else if(color=="morado")
            $(".cuadrado-color").css("background", "purple");
        else if(color=="cafe")
            $(".cuadrado-color").css("background", "brown");
    });

    $("input, select").focus(function(){
        $(this).siblings('.info').css("display", "inherit");
    });

    $("input, select").blur(function(){
        var valor = $(this).val();
        if(valor=="" || valor==null){
            $(this).siblings('.error').css("display", "inherit");
            $(this).css("border", "2px solid #b71c1c");
        }
    });

    $("input[type='email']").blur(function(){
        var valor = $(this).val();
        if(valor!="" && (valor.indexOf("@") == -1 && valor.indexOf(".") == -1)){
            $(this).siblings('.error').css("display", "none");
            $(this).siblings('.errMail').css("display", "inherit");
        }

     });
    
});