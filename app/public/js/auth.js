console.log("auth");

jQuery(document).ready(function() {
    console.log("jquery");

    if(window.location === "/signup"){
        $(".signin").on("click", function(){
          window.location = "/signin";
        })
    } 
    // if(window.location === "/signin"){
    //     $(".login").on("click", login)
    // }
    // if(window.location === "/logout"){
    //     $(".logout").on("click",logout)
    // }

})