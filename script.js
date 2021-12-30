const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerHTML = message;
}

//Show success message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isEmailValid(enteredEmail) {
    //const re = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
    const re = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    return re.test(enteredEmail);
}

//Check required fileds
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === "") {
            showError(input, `${input.id.slice(0,1).toUpperCase() + input.id.slice(1)} is required`);
        } else {
            showSuccess(input);
        }
        //console.log(input.value);
    });
}

//Get field name
//function getFieldName(input) {
//    return input.id.charAt(0).toUpperCase();
//}

//Event listeners
form.addEventListener("submit", function(evt) {
    evt.preventDefault();

    checkRequired([username, email, password, password2]);
    /* if (username.value === "") {
        showError(username, "Username is required!");
    } else {
        showSuccess(username);
    }

    if (email.value === "") {
        showError(email, "Email is required!");
    } else if (isEmailValid(email.value) === false) {
        showError(email, "Enter a valid email!");
    } else {
        showSuccess(email);
    }

    if (password.value === "") {
        showError(password, "Password is required!");
    } else {
        showSuccess(password);
    }

    if (password2.value === "") {
        showError(password2, "Confirm password");
    } else {
        showSuccess(password2);
    } */
});