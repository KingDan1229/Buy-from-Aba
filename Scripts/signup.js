
function formValidation() {
    let name = document.getElementById("name");
    let name2 = document.getElementById("name2");
    let username = document.getElementById("username");
    let tel  = document.getElementById("tel");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let checkName = document.getElementById("checkName");
    let checkName2 = document.getElementById("checkName2");
    let checkUsername = document.getElementById("checkUsername"); 
    let checkNumber = document.getElementById("checkNumber");
    let checkEmail = document.getElementById("checkEmail");
    let checkPassword = document.getElementById("checkPassword");

    
    


    name.addEventListener("click", function() {
        name.style.border = "2px solid black";
        checkName.classList.remove( "show" );


    })


    name2.addEventListener("click", function() {
        name2.style.border = "2px solid black";
        checkName2.classList.remove( "show" );

    })



    username.addEventListener("click", function() {
        username.style.border = "2px solid black";
        checkUsername.classList.remove( "show" );


    })




    tel.addEventListener( "click", function () {
        tel.style.border = "2px solid black";
        checkNumber.classList.remove( "show" );

    } )


    email.addEventListener( "click", function () {
        email.style.border = "2px solid black";
        checkEmail.classList.remove( "show" );

    } )


    password.addEventListener( "click", function () {
        password.style.border = "2px solid black";
        checkPassword.classList.remove( "show" );

    } )





    if (name.value.trim()== "" && name.value == "") 
    {
        name.style.border = "2px solid red"
        checkName.classList.add("show");
        return false;
        
    }


    if ( name2.value.trim()== "" && name2.value == "") 
    {
        name2.style.border = "2px sold red"
        checkName2.classList.add("show");
        return false;
    }



    if (username.value.trim()== "" && username.value == "") 
    {
        username.style.border = "2px solid red"
        checkUsername.classList.add("show");
        return false;
        
    }


    if (tel.value.trim()== "" || tel.value == "" ) 
    {
        tel.style.border ="2px solid red"
        checkNumber.classList.add("show");
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
