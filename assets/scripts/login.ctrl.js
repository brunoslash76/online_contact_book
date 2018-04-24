(function () {
    "use strict";
    const emai_regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let passwordValid = true;
    let input_email = document.getElementById('user-email');
    let input_password = document.getElementById('user-password');

    // Event Listener Here
    document.getElementById('btnSubmit').addEventListener('click', function () {
        let userLogin = getUserLoginData();

        // If there is no valid userLogin nothing happens
        if(!userLogin) {
            console.log('nao podemos enviar pro servidor')
            return;
        }

        // if there is a valid userLogin send to the server
        if (userLogin) {
            console.log('usuario logou')
        }
    });

    document.getElementById('user-password').addEventListener('keyup', function (event) {
        let input_length = event.target.value.length;
        if(input_length < 6) {
            return;
        }

        clearInvalidFields('user-password')
    })




    // Functions here
    /**
     * This function return false if there is 
     * any invalid field, email or password
     * if both fields are valid it return 
     * an object userLogin.
     */
    function getUserLoginData() {
        let isValid = true;
        const userLogin = {
            email: document.getElementById('user-email').value,
            password: document.getElementById('user-password').value
        }
        if(userLogin.email === '') {
            isValid = invalidField('user-email');
        }
        if (userLogin.password === '') {
            isValid = invalidField('user-password');
        }
        return isValid ? userLogin : false;
    }
    /**
     *  verify the values of the inputs
     * @param inputId passad as a string
     */
    function invalidField(inputId) {
        let inputName;
        let msgContainer;
        if(inputId === 'user-email') {
            msgContainer = document.getElementById('label-user')
            input_email.className += ' error'
            inputName = 'Email'
        } else if(inputId === 'user-password') {
            msgContainer = document.getElementById('label-password')
            input_password.className += ' error'
            inputName = 'Senha'
        }
        const template = `
            <p class="error-msg" id="error-${inputName}">
                O campo ${inputName} precisa ser preencido
            </p>
        `;
        // Verify is the @param template already exists 
        if(document.getElementById(`error-${inputName}`)) {
            return false;
        }
        msgContainer.innerHTML += template;
        return false;
    }

    /**
     * This function will clear any invalid field
     */ 
    function clearInvalidFields(field) {
        console.log(field)
        let input_field = document.getElementById(field);
        input_field.classList.remove('error');
        console.log(input_field.nextSibling )
        if(input_field.nextElementSibling === 'P'){
            console.log('aeee')
        }
    }

})();