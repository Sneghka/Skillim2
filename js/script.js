$(document).ready(function () {
    $(".skill_header__sign-up").click(function () {

             /*  if ($(".registration-panel").css("display") == "none") {
            console.log("hello");
            $(".registration-panel").css("display", "block");
        } else {
            $(".registration-panel").css("display", "none");
        }*/
        
        
        if ($(".registration-panel").css("display") == "none"){
            $(".registration-panel").slideDown(1000);
        }
        else {
             $(".registration-panel").slideUp(500);
        }
        
        
       
        
        
        
    });

});