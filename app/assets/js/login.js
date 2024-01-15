/* Global Variable Used */
const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.querySelectorAll('.errorMessage');

// Validate Email 
function validateEmail() {
    const EmailValue = emailInput.value;
   // const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const EmailRegex = /\S+@\S+\.\S+/;


    switch (true) {
        case !EmailValue:
            errorMessage[0].innerText = "Email Should Not Be Empty";
            return false;
        case !EmailRegex.test(EmailValue):
            errorMessage[0].innerText = "Invalid Email";
            return false;
        default:
            errorMessage[0].innerText = "";
            return true;
    }
}

// Validate Password
function validatePassword() {
    const PasswordValue = passwordInput.value;
    const PasswordRegex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])/;

    switch (true) {
        case !PasswordValue:
            console.log("no content");
            errorMessage[1].innerText = "Password Should Not Be Empty";
            return false;
        case PasswordValue.length < 8:
            errorMessage[1].innerText = "Password Should Contain At Least 8 Characters";
            return false;
        case PasswordValue.length > 25:
            errorMessage[1].innerText = "Password Should Not Contain More Than 25 Characters";
            return false;
        case !PasswordRegex.test(PasswordValue):
            errorMessage[1].innerText = "Password Should Contain At Least 1 Special Character";
            return false;
        default:
            errorMessage[1].innerText = "";
            return true;
    }
}

// Handling Form Submitting 
form.addEventListener('submit', (e) => {
    e.preventDefault();
   //alert('presubmit');
    validateEmail();
    validatePassword();
      
    if (!validateEmail() || !validatePassword()) {
       alert('no valid'); 
    } else {
        alert('dddd');
        form.submit();
    }
});
