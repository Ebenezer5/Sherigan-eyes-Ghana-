const form = document.getElementById('loginForm');
const createAccount = document.getElementById('accountLink');

const inputEmail = document.getElementById('inputEmail');
const inputPassword = document.getElementById('inputPassword');

const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const eye = document.getElementById('eye');

const button = document.getElementById('btn')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateLogin() && loginUser()) {
        console.log('Redirecting...');

        window.location.href = '/index/index.html';
    }
});



function loginUser() {
    const users = JSON.parse(localStorage.getItem('users'));

    if (!users) {
        alert('No users found');
        return false;
    }

    const user = users.find(user =>
        user.email === inputEmail.value.trim() &&
        user.password === inputPassword.value
    );

    if (!user) {
        passwordError.textContent = 'Invalid login details';
        return false;
    }

    // login successful
    return true;
}

createAccount.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '../registration/registration.html';

});

function validateLogin() {
    document.querySelectorAll('.error-text').forEach(el => el.textContent = "");

    if (!inputEmail.value.trim()) {
        emailError.textContent = "Email is required"; // fixed variable
        return false;
    }

    if (inputPassword.value.length < 6) {
        passwordError.textContent = "Password too short";
        return false;
    }

    if (eye) {
        eye.classList.add('wink');
        setTimeout(() => {
            eye.classList.remove('wink');
        }, 600);
    }

    return true;
}
