$(document).ready(function(){
    $(".header_button").click(()=>{
        $(".slider").removeClass("hidden");
    });
    $(".slider_close").click(()=>{
        $(".slider").addClass("hidden");
    });
    $(".slider_button").click(()=>{
        event.preventDefault();
        //$("#ajax-output").empty().html($('#ajax-form input[name=email]').val()+" "+$('#ajax-form input[name=password]').val());
        //console.log($('#ajax-form input[name=email]').val())
        $.get("http://luffy.ee.ncku.edu.tw:5527/User", {
            email: $('#ajax-form input[name=email]').val(),
            password: $('#ajax-form input[name=password]').val(),
          }).done(function(data){
            $(".container_title").empty().html(data.email+data.password)
          });
          
          
        /*
        $.ajax({
            url: "/User.html",
            type: "get",
            data: {
              email: $("#ajax-form input[name=email]").val(),
              password: $("#ajax-form input[name=password]").val()
            },
            success: (data) => {
              document.title = "User"
              $("#ajax-output").html("Hi")
              $("#ajax-form input[name=email]").val("")
              $("#ajax-form input[name=password]").val("") 
            }
          })*/
        console.log("Sending");
    })
    
})