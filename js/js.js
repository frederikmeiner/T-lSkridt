/*
 * fil: js.js
 * purpose: introdction to jQuery
 */
console.log('file: js/js.js loaded');

// A $( document ).ready() block.
$(document).ready(function () { // kører så snart DOM er klar

    console.log("jQuery 3.5.1 running. Alert level green.");

    // ... min kode herfra ...

    // Fader content på forsiden ind
    $('.content_forside').css('display', 'none');
    $('.content_forside').fadeIn(1000);



    // REGISTRERING
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');

    form.addEventListener('submit', e => {
        e.preventDefault();

        checkInputs();
    });

    function checkInputs() {
        // trim to remove the whitespaces
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();

        if (usernameValue === '') {
            setErrorFor(username, 'Vi skal bruge dit navn Kaptajn');
        } else {
            setSuccessFor(username);
        }

        if (emailValue === '') {
            setErrorFor(email, 'Email må ikke være tomt');
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'indtast en korrekt mail tak');
        } else {
            setSuccessFor(email);
        }

        if (passwordValue === '') {
            setErrorFor(password, 'Hvordan vil du logge ind uden en kode?');
        } else {
            setSuccessFor(password);
        }

        if (password2Value === '') {
            setErrorFor(password2, 'Feltet skal udfyldes');
        } else if (passwordValue !== password2Value) {
            setErrorFor(password2, 'Adgangskode er ikke ens');
        } else {
            setSuccessFor(password2);
        }
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }

    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    //MAPBOX

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-74.50, 40],
        zoom: 9
    });


    //MODAL/POPUP VINDUE
    setTimeout(function () {
        $('.modal').css('display', 'block');
    });
});

$('.modalKnap').click(function () {
    $('.modal').css('display', 'none');

    // ... min kode slut ...

}); // denne line må ikke slettes
