const user = JSON.parse(localStorage.getItem("currentUser"));
const welcomeUser = document.getElementById('welcome');
const logoutBtn = document.getElementById("logoutBtn");

if (!user) {
    window.location.href = "../login/login.html";
}

welcomeUser.textContent =`Welcome, ${user.name}`;



logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    window.location.href = "../login/login.html";
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
