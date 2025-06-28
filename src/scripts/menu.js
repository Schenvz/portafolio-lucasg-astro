// src/scripts/menu.js

export default function initMenu() {
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  const navLinks = document.querySelectorAll(".mobile-nav-link");

  if (!menuButton || !mobileMenu || !menuIcon || !closeIcon) return;

  const toggleMenu = () => {
    const isHidden = mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden");
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    document.body.classList.toggle("overflow-hidden");
    menuButton.setAttribute("aria-expanded", isHidden ? "true" : "false");
  };

  menuButton.addEventListener("click", toggleMenu);
  navLinks.forEach((link) => link.addEventListener("click", toggleMenu));
}
