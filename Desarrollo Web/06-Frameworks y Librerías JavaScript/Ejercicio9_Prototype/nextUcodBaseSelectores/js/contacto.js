document.observe("dom:loaded", function(){
    var i = new Selector('input');
    var valorNombre = $F(i.findElements()[0]);
    console.log(valorNombre);

    var email = $F(i.findElements()[1]);
    console.log(email);

    var masculino = $F(i.findElements()[2]);
    console.log(masculino);

    var femenino = $F(i.findElements()[3]);
    console.log(femenino);

    var submitInput = i.match($$('form')[0].select('div:last')[0].childElements());
    console.log(submitInput);


});