function agregarFavoitos(elemento){

} 

$( function() {

    $("#menu").menu();
    $("#accordion").accordion({
        heightStyle: "content"
    });

    $("#eliminarCotenedor").droppable({
        drop: function( event, ui ) {
            console.log("draggable");
            console.log(ui.draggable);
            ui.draggable.hide( "clip", 1000);
        }
      });

    $("#favoritosCotenedor").droppable({
        drop: function( event, ui ) {
            console.log("draggable");
            console.log(ui.draggable);   
            $(ui.draggable)
                .css({
                    width: "100%",
                    position: "relative",
                    left: "auto",
                    top: "auto"
                })
                .draggable("destroy")
                .removeClass("imgBox")
                .addClass("imgBoxFav")
                .appendTo($(this))
        }
      });

    $("#todosMenu").click(function(){
        $("img[id^='img']").parent().css("display", "block");
    });

    $("#floresMenu").click(function(){
        $("img[id^='img']").parent().css("display", "none");
        $("img[id^='imgFlor']").parent().css("display", "block");
    });

    $("#deportesMenu").click(function(){
        $("img[id^='img']").parent().css("display", "none");
        $("img[id^='imgDep']").parent().css("display", "block");
    });

    $("#autosMenu").click(function(){
        $("img[id^='img']").parent().css("display", "none");
        $("img[id^='imgCar']").parent().css("display", "block");
    });

    $("#avionesMenu").click(function(){
        $("img[id^='img']").parent().css("display", "none");
        $("img[id^='imgAvi']").parent().css("display", "block");
    });

    $("#paisajesMenu").click(function(){
        $("img[id^='img']").parent().css("display", "none");
        $("img[id^='imgPai']").parent().css("display", "block");
    });

    $("#dialog").dialog({
        autoOpen: false,
        width: "50%",
        height: "auto",
        show: {
          effect: "blind",
          duration: 1000
        },
        hide: {
          effect: "explode",
          duration: 1000
        }
    });

    $("img[id^='img']").parent()
        .click(function(){
            $("#dialog img").attr("src", $(this).find("img").attr("src"));
            $("#dialog").dialog("open");
        })
        .draggable({
            start: function() {
                $(this).css("z-index","2");
                $(this).off("click");
            },
            revert: "invalid",
          });
    
});
