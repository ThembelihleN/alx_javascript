const password = document.getElementById("password");
const p = document.getElementById("error");
const form = document.getElementById("passwordForm");
const button = document.querySelector("button");

//password regular expressions
const lengthRegExp = /.{8,}/;
const uppercaseRegExp = /[A-Z]/;
const lowercaseRegExp = /[a-z]/;
const digitRegExp =  /\d/;
const specialCharRegExp = /[!@#$%^&*]/;

//function to validate the password
function validatePassword(password){
    if (
        lengthRegExp.test(password) &&
        uppercaseRegExp.test(password) &&
        lowercaseRegExp.test(password) &&
        digitRegExp.test(password) &&
        specialCharRegExp.test(password)
){
    p.message = ' ';
    form.submit();
}else{
    p.message = "The password must:be at least 8 characters long, at least one uppercase letter, at least one lowercase letter, at least one numeric digit, at least one special character"
}
}

button.addEventListner('submit', function (event) {
    event.preventDefault();
    const password = passwordInput.value;
    validatePassword(password);
})

