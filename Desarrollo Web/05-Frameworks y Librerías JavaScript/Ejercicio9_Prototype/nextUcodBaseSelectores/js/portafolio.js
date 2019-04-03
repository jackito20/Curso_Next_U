document.observe("dom:loaded", function(){
    var titulo = $$("h4")[5]
    console.log(titulo);

    var boton = $$("button")[0]
    console.log(boton);

    var imagen = $$("img[alt='Pasto']")
    console.log(imagen);

    var enlaceVideojuego = $$('footer')[0].childElements()[0].childElements()[1].select('.btn')[0];
    console.log(enlaceVideojuego);


})