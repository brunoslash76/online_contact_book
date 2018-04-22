(function () {
    "use strict";


    // Event Listener Here
    document.getElementById('btnSubmit').addEventListener('click', function () {
        // validate data from input
        // send data to server
        

    });

    document.getElementById('password').addEventListener('keyup', function (event) {
        // verify if there value is valid
        if(event.target.value.length !== 6) {
            validateField(event.target);
        }
    })

    // Functions here
    function validatePassword() {
        let pass = document.getElementById('password');

        if(pass.value.length < 6) {
            passwordLengthErro(pass)
        }
    }

    function passwordLengthErro(field) {

    }



})();