$("#btn-vaca").click(function(){
    $("#vaca").toggle("slow", function(){
        $("#mensaje").text("La vaca hace muuu");
    });    
});

$("#btn-cerdo").click(function(){
    $("#cerdo").toggle("slow", function(){
        $("#mensaje").text("El cerdo hace oink");
    });    
});

$("#btn-gallina").click(function(){
    $("#gallina").toggle("slow", function(){
        $("#mensaje").text("La gallina hace cloac");
    });    
});

$("#btn-oveja").click(function(){
    $("#oveja").toggle("slow", function(){
        $("#mensaje").text("La oveja hace beee");
    });    
});

$("#bCorte").click(function(){
    //$("body").css("cursor", "url('img/cut.png'), auto");    
    $("body").removeClass("cursorConstruir");    
    $("body").addClass("cursorCorte");    
});

$("#bConstruir").click(function(){
    //$("body").css("cursor", "url('img/build.png'), auto"); 
    $("body").removeClass("cursorCorte");    
    $("body").addClass("cursorConstruir");    
    $(".animalP").show();
    $(".cerca").show("slow", function(){
        $("h1").text("Construye una cerca");
      });
});

$(".arbusto").hover(function(){
    var clases = $("body").attr("class");
    if(clases.indexOf("cursorCorte")>-1){
        $(this).hide();
    }
});

$(".cerca, .animalP").mousedown(function(){
    var clases = $("body").attr("class");
    var elemento=$(this);
    if(clases.indexOf("cursorConstruir")>-1){

        $(this).on('dragstart', function(event) {
            event.preventDefault();
          });

        $("body").mousemove(function(event){
            event.preventDefault();
            var x = event.pageX;
            var y = event.pageY;
            var width = elemento.css("width");
            width=width.split("px", 1);
            width=parseInt(width[0])/2;

            var height = elemento.css("height");
            height=height.split("px", 1);
            height=parseInt(height[0])/2;
            
            elemento.css("left", x-width);
            elemento.css("top", y-height);
        })
    }
});

$(".cerca, .animalP").mouseup(function(){
    var clases = $("body").attr("class");
    if(clases.indexOf("cursorConstruir")>-1){

        $("body").off("mousemove")
    }
});

$("#bCursor").click(function(){
    $("button[id^=btn-]").hide();
    $(".animal").hide();
    $(".animalP").hide();
    $(".arbusto").hide();
    $(".cerca").hide();
    $("#mensaje").hide();
    $("h1").text("Muy Bien!");
    $("body").removeClass("cursorCorte");    
    $("body").removeClass("cursorConstruir"); 
});
