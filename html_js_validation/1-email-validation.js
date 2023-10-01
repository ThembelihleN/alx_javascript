const form = document.getElementById('emailForm');
const p = document.getElementById('error');
const button = document.querySelector('button');

// regular expression
const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//email validation function
function validateEmail(email) {
    if (regExp.test(email)) {
        p.textContent = '';
        form.submit();
    } else {
        p.textContent = 'Please enter a valid email address.';
    };
}

button.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    validateEmail(email);
});