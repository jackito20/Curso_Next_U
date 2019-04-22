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

     $("#psw").select(function(){
        alert("No puedes copiar la contraseña debes repetirla!");
        $(this).attr("oncopy","return false");
        $(this).contextmenu(function(event){
            event.preventDefault();
        });
     });

     $("#psw").keypress(function(event){
        var key = event.which;
        if ((key>32&&key<48)||(key>57&&key<65)||(key>90&&key<97)||(key>122&&key<127)||(key>160&&key<256)) {
            $(this).siblings(".info").css("display","none");
            $(this).siblings(".errPsw").css("display","block");
            event.preventDefault();
        }else {
            $(this).siblings(".errPsw").css("display","none");
        }
     });

     $("#pswRepeat").keyup(function(){
        var psw= $("#psw").val();
        var pswRepeat = $(this).val();
        if(psw != pswRepeat){
            $(".errPswRepeat").css("display", "block");
        }else{
            $(".errPswRepeat").css("display", "none");
        }
     });

     $(".imagen").mousedown(function(event){
        var self = $(this);
        $(this).addClass("imagen-seleccionada");
        $(this).on('dragstart', function(event) {
            event.preventDefault();
          });
        $(".prueba-container").mousemove(function(event){
            var x = event.pageX;
            var y = event.pageY;
            self.css("left",(x- 234)+"px");
            self.css("top",(y- 591)+"px");
        });     
     });

     $(".prueba-container").mouseup(function(event){
        $(event.target).removeClass("imagen-seleccionada");
        $(this).off("mousemove");
        var x = parseFloat($(event.target).css("left"));
        var y = parseFloat($(event.target).css("top"));

        console.log(x+" "+y);

        var id= $(event.target).attr("id");
        console.log(id);
        if(id=="p2" && (x>=929 && x <= 1009) && (y>=21 && y<= 101)){
            $(event.target).css("left","924px");
            $(event.target).css("top","65px");
            $(event.target).addClass("imagen-correcta");
            $(event.target).off("mousedown");
            console.log("actualizado");
        }
     });

});