$(function(){
    iniciar();
    $(".desc-form").submit(function(e){
        var filedata = $(this).find("input[name='file']").prop("files")[0];
        console.log(filedata);
        var form_data = new FormData();
        form_data.append("file", filedata);
    
        $.ajax({
            url: "./hoja_vida.php",
            type: "post",
            dataType: "json",
            contentType: false,
            processData: false,
            data: form_data,
            success: function(data){
                if(data.archivo){
                console.log(data);
                }
                
            },
            error: function (xhr, thrownError) {
                console.log(xhr.responseText);
                console.log(thrownError);
            }
        });
    });
})

function iniciar(){
    $.ajax({
      url: "./checkSession.php",
      type: "GET",
      processData: false,
      dataType: "json"
    }).done(function(data){
      if(data=="false"){
        location.href ="./login.html";
      }else{
        console.log(data);
      }
    });
  }