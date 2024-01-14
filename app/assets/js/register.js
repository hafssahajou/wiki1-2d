const form = document.getElementById('form');
const username = document.getElementById('Name');
const email = document.getElementById('Email');
const password = document.getElementById('Password');
const PasswordRegex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])/;

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = Email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(Email).toLowerCase());
}

const validateInputs = () => {
    const NameValue = username.value.trim();
    const EmailValue = email.value.trim();
    const PasswordValue = password.value.trim();

    if (NameValue === '') {
        setError(username, 'Name is required');
    } else {
        setSuccess(username);
    }

    if (EmailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(EmailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (PasswordValue === '') {
        setError(password, 'Password is required');
    } else if (PasswordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters.');
    } else if (!PasswordRegex.test(PasswordValue)) {
        setError(password, 'Password must contain at least one special character');
    } else {
        setSuccess(password);
    }
};
