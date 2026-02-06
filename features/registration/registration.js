const form = document.getElementById('registerForm');

const inputName = document.getElementById('inputName');
const inputContact = document.getElementById('inputContact');
const inputEmail = document.getElementById('inputEmail');
const inputPassword = document.getElementById('inputPassword');
const inputConfirmPassword = document.getElementById('inputConfirmPassword');

const nameError = document.getElementById('nameError');
const contactError = document.getElementById('contactError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');
const confirmError = document.getElementById('confirmError');

const eye = document.getElementById('eye');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateForm() && saveUser()) {
        form.reset();
        window.location.href = '../index/index.html';
    }
});


function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

function saveUser() {
    const users = getUsers();

    const newUser = {
        name: inputName.value.trim(),
        contact: inputContact.value.trim(),
        email: inputEmail.value.trim(),
        password: inputPassword.value
    };

    const exists = users.some(user => user.email === newUser.email);
    if (exists) {
        alert('User already exists');
        return false;
    }

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
}

function validateForm() {
    document.querySelectorAll('.error-text').forEach(el => el.textContent = "");

    if (!inputName.value.trim()) {
        nameError.textContent = "Name is required";
        return false;
    }

    if (!/^\d{10,}$/.test(inputContact.value.trim())) {
        contactError.textContent = "Invalid contact number";
        return false;
    }
    

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail.value.trim())) {
        emailError.textContent = "Invalid email";
        return false;
    }

    if (inputPassword.value.length < 6) {
        passError.textContent = "Minimum 6 characters";
        return false;
    }

    if (inputPassword.value !== inputConfirmPassword.value) {
        confirmError.textContent = "Passwords do not match";
        return false;
    }

    if (eye) {
        eye.classList.add('wink');
        setTimeout(() => eye.classList.remove('wink'), 600);
    }
    
    
    return true;
}