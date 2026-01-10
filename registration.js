const nameInput = document.getElementById('inputName');
const ageInput = document.getElementById('inputAge');
const contactInput = document.getElementById('inputContact');
const emailInput = document.getElementById('inputEmail');
const passwordInput = document.getElementById('inputPassword');
const confirmInput = document.getElementById('inputConfirmPassword');
const button = document.getElementById('btn');

button.addEventListener('click', () => {
    // 1. Clear all old errors first
    document.querySelectorAll('.error-text').forEach(el => el.textContent = "");

    const age = Number(ageInput.value);
    const contact = contactInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirm = confirmInput.value;

    // 2. Perform validations with early returns
    if (nameInput.value === "") {
        document.getElementById('nameError').textContent = "Name is required";
        return;
    }

    if (age < 18) {
        document.getElementById('ageError').textContent = 'Must be 18 and above 🔞';
        return;
    }

    if (contact.length < 10 || contact.includes(' ')) {
        document.getElementById('contactError').textContent = 'Enter a valid phone number ❌';
        return;
    }

    if (!email.includes('@') || !email.includes('.') || email.includes(' ')) {
        document.getElementById('emailError').textContent = 'Invalid email address ❌';
        return;
    }

    if (password.length < 6) {
        document.getElementById('passError').textContent = 'Minimum 6 characters required ❌';
        return;
    }

    if (password !== confirm) {
        document.getElementById('confirmError').textContent = 'Passwords do not match ❌';
        return;
    }

    // 3. If no return was triggered, the form is valid
    alert('Form submitted successfully ✔');
});