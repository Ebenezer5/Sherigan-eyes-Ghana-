const form = document.getElementById('registerForm');

const inputName = document.getElementById('inputName');
const inputContact = document.getElementById('inputContact');
const inputEmail = document.getElementById('inputEmail');
const inputPassword = document.getElementById('inputPassword');
const inputConfirmPassword = document.getElementById('inputConfirmPassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateForm()) {
        saveUser();
        alert('Registration successful ✔');
        form.reset();
        window.location.href = '../login/login.html';
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
        password: inputPassword.value.trim()
    };

    const exists = users.some(user => user.email === newUser.email);
    if (exists) {
        alert('User already exists');
        return;
    }

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
}

function validateForm() {
    document.querySelectorAll('.error-text').forEach(el => el.textContent = "");

    if (!inputName.value.trim()) {
        nameError.textContent = "Name is required";
        return false;
    }

    if (inputContact.value.trim().length < 10) {
        contactError.textContent = "Invalid contact";
        return false;
    }

    if (!inputEmail.value.includes('@')) {
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

    return true;
}