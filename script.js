const menuCheckbox = document.getElementById("menu-toggle");

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    menuCheckbox.checked = false;
  });
});
