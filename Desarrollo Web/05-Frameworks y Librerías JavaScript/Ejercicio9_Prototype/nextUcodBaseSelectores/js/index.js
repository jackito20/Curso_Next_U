document.observe("dom:loaded", function(){
    var titulo = $("tituloInicio")
    console.log(titulo);

    var botones = $$(".botonRedondo")
    console.log(botones);

    var s = new Selector(".espaciado")
    var x= s.findElements()[4].select(".btn-block")
    console.log(x);

    var contacto = $$("li a[href='contacto.html']")[0].ancestors()
    console.log(contacto);

    var texto = $("textoQueEs").previous()
    console.log(texto);
});