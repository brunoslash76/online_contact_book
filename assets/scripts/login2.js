(function () {
    "use strict";

    // variables
    let inputEmail = document.getElementById('user-email');
    let inputPassword = document.getElementById('user-password');
    let btnSend = document.getElementById('btnSubmit');



    // Listeners
    btnSend.addEventListener('click', function () {
        let email = setEmail(inputEmail);
        let password = setPassword(inputPassword);
        let userInfoLogin = undefined;

        if (email && password) {
            userInfoLogin = {
                email: email,
                password: password
            }
        }
        if (userInfoLogin) {    
            login(userInfoLogin);
        }

        
    })






    // Functions
    function setEmail(email) {
        if(!email.value || email.value === '') {
            // setError for email input
            setError(email);
            addErrorMessage(email);
            return undefined;
        }
        if(email.classList.contains('error')) {
            removeError(email)
            removeErrorMessage(email)
            console.log(email.value);
            return email.value;
        }
    }

    function setPassword(password){
        if(!password.value || password.value === '') {
            setError(password);
            addErrorMessage(password);
            return undefined;
        }

        if(password.classList.contains('error')) {
            removeError(password)
            removeErrorMessage(password)
            console.log(password.value)
            return password.value;
        }
    }

    // other methods
    function setError(input){
        if (input.classList.contains('error')) {
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

    function login(user) {
        /**
         * @todo criar api básica para receber esse requisition
         */
        console.log(user)
        let req = new XMLHttpRequest();
        req.open('POST', 'user/login');
        req.setRequestHeader(
            'ContentType',
            'application/json'
        );
        req.onload = function (e) {
            console.log(e);
            if (req.status === 200) {
                console.log('requisição para o servidor OK...');
                let userInfo = JSON.parse(req.responseText);
                console.log(userInfo);
            }
        }
        req.send(JSON.stringify(user));
    }



})();