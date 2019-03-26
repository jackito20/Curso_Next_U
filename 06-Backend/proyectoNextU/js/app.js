$(document).ready(function() {
    obtenerFiltros();
    $("#mostrarTodos").click(function(){
        $.ajax({
            url: "./back/mostrarTodos.php",
            type: "GET",
            dataType: "json",
            contentType: false,
            processData: false,
            error: function(){
                console.log("no fue exitoso");
            }
        }).done(function(data){
            $( ".itemMostrado" ).remove();    
            data.forEach(element => {
                mostrarData(element);
            });
        })
    })

    $("#formulario").submit(function(event){
        event.preventDefault()
        var rangoPrecio = $("#rangoPrecio").val();
        var rangoPrecio = rangoPrecio.split(";");
        $.ajax({
            url: "./back/filtrarData.php",
            type: "post",
            dataType: "json",
            data: {
                precioMin: rangoPrecio[0],
                precioMax: rangoPrecio[1],
                ciudad: $("#selectCiudad").val(),
                tipo: $("#selectTipo").val()
            },
            error: function(){
                console.log("no fue exitoso");
            }
        }).done(function(data){
            $( ".itemMostrado" ).remove();    
            data.forEach(element => {
                mostrarData(element);
            });
        })
    })
});

function obtenerFiltros(){
    $.ajax({
        url: "./back/obtenerFiltros.php",
        type: "GET",
        dataType: "json",
        contentType: false,
        processData: false,
        error: function(){
            console.log("no fue exitoso");
        }
    }).done(function(data){
        mostrarFiltros(data);
    })
}

function mostrarFiltros(data){
    $("#selectCiudad").css("display", "block")
    data.ciudades.forEach(element => {
        option = "<option value='"+element+"'>"+element+"</option>"
        $("#selectCiudad").append(option)
    });

    $("#selectTipo").css("display", "block")
    data.tipos.forEach(element => {
        option = "<option value='"+element+"'>"+element+"</option>"
        $("#selectTipo").append(option)
    });
}

function mostrarData(data){
    datos = [
        "<p><strong>Dirección: </strong>"+data.Direccion+"</p>",
        "<p><strong>Ciudad: </strong>"+data.Ciudad+"</p>",
        "<p><strong>Teléfono: </strong>"+data.Telefono+"</p>",
        "<p><strong>Código Postal: </strong>"+data.Codigo_Postal+"</p>",
        "<p><strong>Tipo: </strong>"+data.Tipo+"</p>",
        "<p><strong>Precio: </strong><strong class='precioTexto'>"+data.Precio+"</strong></p>",
    ]

    var bloque="<div class='card itemMostrado'><img src='./img/home.jpg'><div class='card-stacked'><div class='card-content'>"
    datos.forEach(element => {
        bloque+=element;
    });
    bloque+="</div></div></div>";
    $( ".colContenido" ).append(bloque);
}