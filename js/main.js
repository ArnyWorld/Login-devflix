window.addEventListener("DOMContentLoaded",()=>{
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let alertInput = document.querySelectorAll('.alert'); 
   
    email.addEventListener("blur",showAlert);
    password.addEventListener("blur",showAlert);

    email.addEventListener("input",showAlert);
    password.addEventListener("input",showAlert);


    function showAlert(e){
        alertInput[getId(e)].classList.remove("hidden")
        e.target.classList.add("form__alert");        
        hiddenAlert(e)
    }

    function hiddenAlert(e){
        if(e.target.value.length>3){
            alertInput[getId(e)].classList.add("hidden")
            e.target.classList.remove("form__alert");
        }
    }

    function getId(e){
        return e.target.id=='email'?0:1;
    }

})