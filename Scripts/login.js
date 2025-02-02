
function formValidation() {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let checkUsername = document.getElementById("checkUsername"); 
    let checkEmail = document.getElementById("checkEmail");
    let checkPassword = document.getElementById("checkPassword");

    
    


   username.addEventListener("click", function() {
        username.style.border = "2px solid black";
        checkUsername.classList.remove( "show" );


    })



    email.addEventListener( "click", function () {
        email.style.border = "2px solid black";
        checkEmail.classList.remove( "show" );

    } )


    password.addEventListener( "click", function () {
        password.style.border = "2px solid black";
        checkPassword.classList.remove( "show" );

    } )


  
    


    if (username.value.trim()== "" && username.value == "") 
    {
        username.style.border = "2px solid red"
        checkUsername.classList.add("show");
        return false;
        
    }



    if (email.value.trim()== "" || email.value == "" || !email.value.includes("@")) 
    {
        email.style.border ="2px solid red"
        checkEmail.classList.add("show");
        return false;
    }
    

    if (password.value.trim()== "" || password.value == "" || password.value.length <8 ) 
    {
        password.style.border ="2px solid red"
        checkPassword.classList.add("show");
        return false;
    }


  

    
}
