const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Toggle menu
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu after clicking a link (Mobile only)
document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove("active");
    }
  });
});;
