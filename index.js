// const user = JSON.parse(localStorage.getItem("currentUser"));
const welcomeUser = document.getElementById('welcome');
const loginBtn = document.getElementById("loginBtn");

// if (!user) {
//     window.location.href = "../features/login/login.html";
// }

// welcomeUser.textContent =`Welcome, ${user.name}`;



loginBtn.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    window.location.href = "../features/login/login.html";
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
