$("#login-form").submit(function(e){
    
    $.ajax({
        url: "./login.php",
        type: "POST",
        data: {
            username: $("#user").val(),
            password: $("#password").val()
        }
    }).done(function(data){
        //alert(data);
        if(data=="true"){
            window.location="index.html";
        }else{
            alert(data);
        }
    })   
})