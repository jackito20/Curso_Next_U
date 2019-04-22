$("#login-form").submit(function(event){
    //alert("enviar");

    $.ajax({
        url: "login.php",
        type: "POST",
        data:{
            usuario: $("#user").val(),
            password: $("#password").val()
        }
    }).done(function(data){
        alert(data);
    })
});