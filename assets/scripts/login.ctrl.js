(function () {
    "use strict";
    let passwordValid = true;


    // Event Listener Here
    document.getElementById('btnSubmit').addEventListener('click', function () {
        let userLogin = getUserLoginData();
        if(!userLogin) {
            console.log('nao podemos enviar pro servidor')
        }
    });

    // document.getElementById('password').addEventListener('keyup', function (event) {
        
    // })

    // Functions here
    function getUserLoginData() {

        let isValid;

        const userLogin = {
            email: document.getElementById('user-email').value,
            password: document.getElementById('user-password').value
        }

        if(userLogin.email === '') {
            console.log('email')
            isValid = invalidField('user-email');
        }

        if (userLogin.password === '') {
            console.log('senha')
            isValid = invalidField('user-password');
        }
        return isValid ? userLogin : false;
    }

    function invalidField(inputId) {
        let inputName;
        let msgContainer;

        if(inputId === 'user-email') {
            msgContainer = document.getElementById('label-user')
            inputName = 'Email'
        } else if(inputId === 'user-password') {
            msgContainer = document.getElementById('label-password')
            inputName = 'Senha'
        }
        const template = `
            <p class="error-msg" id="error-${inputName}">
                O campo ${inputName} precisa ser preencido
            </p>
        `;
        if(document.getElementById(`error-${inputName}`)) {
            return false;
        }

        msgContainer.innerHTML += template;
        return false;
    }

})();