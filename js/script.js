$(document).ready(function () {
    $(".skill_header__sign-up").click(function () {    
        
        if ($(".registration-panel").css("display") == "none"){
            $(".registration-panel").slideDown(1000);
        }
        else {
             $(".registration-panel").slideUp(500);
        }
            
      
    });

});