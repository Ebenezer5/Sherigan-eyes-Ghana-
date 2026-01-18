const form = document.getElementById('loginForm');
const createAccount = document.getElementById('accountLink');

const inputEmail = document.getElementById('inputEmail');
const inputPassword = document.getElementById('inputPassword');

const nameError = document.getElementById('nameError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateLogin()) {
        loginUser();
    }
    window.location.href = '../index.html';
});

function loginUser() {
    const users = JSON.parse(localStorage.getItem('users'));

    if (!users) {
        alert('No users found');
        return;
    }

    const user = users.find(user =>
        user.email === inputEmail.value.trim() &&
        user.password === inputPassword.value
    );

    if (!user) {
        passwordError.textContent = 'Invalid login details';
        return;
    }

    alert('Login successful ✔');
}

createAccount.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '../registration/registration.html';
});

function validateLogin() {
    document.querySelectorAll('.error-text').forEach(el => el.textContent = "");

    if (!inputEmail.value.trim()) {
        nameError.textContent = "Email is required";
        return false;
    }

    if (inputPassword.value.length < 6) {
        passwordError.textContent = "Password too short";
        return false;
    }

    return true;
}