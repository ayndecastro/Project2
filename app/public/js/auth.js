console.log("auth");

jQuery(document).ready(function() {
    console.log("jquery");

    if(window.location === "/signin"){
        $(".signup").on("click", function(){
          window.location = "https://project2present.herokuapp.com/signup";
        })
    } 
    // if(window.location === "/signin"){
    //     $(".login").on("click", login)
    // }
    // if(window.location === "/logout"){
    //     $(".logout").on("click",logout)
    // }

})