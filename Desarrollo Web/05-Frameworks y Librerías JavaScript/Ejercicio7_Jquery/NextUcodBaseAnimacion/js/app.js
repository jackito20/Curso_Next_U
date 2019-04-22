
function derecha(elemento){
  $(elemento).animate(
    {
      left: "+=750"
    }, 2500, function(){
      izquierda(elemento)
    }
  )
}

function izquierda(elemento){
  $(elemento).animate(
    {
      left: "-=750"
    }, 2500, function(){
      derecha(elemento)
    }
  )
}

function arriba(elemento){
  $(elemento).animate(
    {
      top: "-=400"
    }, 2500, function(){
      abajo(elemento)
    }
  )
}

function abajo(elemento){
  $(elemento).animate(
    {
      top: "+=400"
    }, 2500, function(){
      arriba(elemento)
    }
  )
}

function arqueroDerecha(elemento){
  $(elemento).animate(
    {
      left: "+=200"
    }, 1500, function(){
      arqueroIzquierda(elemento)
    }
  )
}

function arqueroIzquierda(elemento){
  $(elemento).animate(
    {
      left: "-=200"
    }, 1500, function(){
      arqueroDerecha(elemento)
    }
  )
}

function reboteArriba(elemento){
  console.log("pego arriba")
  elemento.animate(
    {
      top: "-=500"
    },
    {
      step: function(now){
        elemento.css("transform","rotate("+now*10+"deg)")
      },
      queue: false,
      duration: 1000,
    }
  )
}
$(function(){
  var vecesPresionada=0;
  var posHorizontal;
  var posVertical;
  $(document).on("keypress",function(e){

    if (e.which==32) {
      e.preventDefault();
      vecesPresionada++;
      if (vecesPresionada==1) {
        derecha($("#fHorizontal"));
      }else if (vecesPresionada==2) {
        $("#fHorizontal").stop();
        arriba($("#fVertical"));
      }else if (vecesPresionada==3) {
        $("#fVertical").stop();
        posHorizontal = $("#fHorizontal").css("left");
        posVertical = $("#fVertical").css("top");
      }
    }
  })

  $("#balon").on("click", function(){
    $(this)
    .animate(
      {
        top: posVertical,
        left: posHorizontal
      },600)
    .animate(
        {
          width: "-=70"
        },
        {
          step: function(now){
            $(this).css("transform","rotate("+now*10+"deg)")
          },
          queue: false,
          duration: 1200,
          complete: function(){
            var x= parseFloat(posHorizontal);
            var y= parseFloat(posVertical);
            var centro = parseFloat($("#arquero").css("left"))+236;
            console.log($(this))
            console.log($(this).css("left")+" "+x)
            console.log($(this).css("top")+" "+y)
            var centro = parseFloat($("#arquero").css("left"))+235;
            console.log("arquero"+" "+centro)
            if ((x<454||x>1009)||(y<55||y>409)) { //Validación si va por fuera
              $(this).animate(
                {
                  width: "-=70",
                  top: "+=100"
                },
                {
                  step: function(now){
                    $(this).css("transform","rotate("+now*10+"deg)")
                  },
                  queue: false,
                  duration: 1000,
                }
              )
            }else if ((x>=949&&x<=970)&&(y>=88)) {
              console.log("pego en el palo derecho")
              $(this).animate(
                {
                  top: "+=100"
                },
                {
                  step: function(now){
                    $(this).css("transform","rotate("+now*10+"deg)")
                  },
                  queue: false,
                  duration: 1000,
                }
              )
            }else if ((x>=454&&x<=486)&&(y>=88)) {
              console.log("pego en el palo izquierdo")
              $(this).animate(
                {
                  left: "-=1000"
                },
                {
                  step: function(now){
                    $(this).css("transform","rotate("+now*10+"deg)")
                  },
                  queue: false,
                  duration: 1000,
                }
              )
            }else if((y<=88&&y>=50)&&(x>=450)){
              reboteArriba($(this));
            }else if((x>=(centro-50)&&x<=(centro+50))&&(y>154&&y<266)){
              reboteArriba($(this));
            }else{
              $(this).animate(
                {
                  top: "400px"
                },
                {
                  step: function(now){
                    $(this).css("transform","rotate("+now*10+"deg)")
                  },
                  queue: false,
                  duration: 1000,
                  complete: function(){
                    $(".oculto").fadeIn(1000, function(){
                      $(this).css("color", "green");
                    })
                  }
                }
              )
            }
          }
        }
      )
    /*.delay(1000)
    .animate(
      {
        top: "400px"
      }, 1000)
    */

  });

$(".iniciar").click(function(){
  console.log("INICIAR")
})
  /*Mover arquero*/
  arqueroDerecha($("#arquero"));
});
