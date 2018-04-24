(function () {
    "use strict";

    // variables
    let inputEmail = document.getElementById('user-email');
    let inputPassword = document.getElementById('user-password');
    let btnSend = document.getElementById('btnSubmit');



    // Listeners
    btnSend.addEventListener('click', function () {
        let userInfoLogin = {
            email: setEmail(inputEmail),
            password: setPassword(inputPassword)
        }
        
    })

    // Functions
    function setEmail(email) {
        if(!email.value || email.value === '') {
            // setError for email input
            setError(email);
            addErrorMessage(email);
            return;
        }
        if(email.classList.contains('error')) {
            removeError(email)
            removeErrorMessage(email)
            return email.value;
        }
    }

    function setPassword(password){
        if(!password.value || password.value === '') {
            setError(password);
            addErrorMessage(password);
            return;
        }

        if(password.classList.contains('error')) {
            removeError(password)
            removeErrorMessage(password)
            return password.value;
        }
    }

    // other methods
    function setError(input){
        console.log(input.getAttribute('name'))
        if (input.classList.contains('error')) {
            console.log('funcionou');
            return;
        }
        input.className += ' error';
    }

    function removeError(input) {
        input.classList.remove('error')
    }

    function addErrorMessage(input) {
        if(input.getAttribute('valid') === 'false') {
            return;
        }
        input.setAttribute('valid', 'false')
        let errorMessage = `O campo ${input.getAttribute('name')} está inválido!`;
        let paragraph = document.createElement('p');
        paragraph.setAttribute('class', 'error-msg');
        paragraph.innerHTML = errorMessage;
        input.insertAdjacentElement('afterend', paragraph);
    }

    function removeErrorMessage(input) {
        input.setAttribute('valid', 'true')
        let pe = input.parentElement;
        pe.removeChild(pe.childNodes[4])
    }



})();