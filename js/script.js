document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelector('.close-btn');

    const openMenu = () => {
      navLinks.classList.add('active');
      overlay.classList.add('show');
    };

    const closeMenu = () => {
      navLinks.classList.remove('active');
      overlay.classList.remove('show');
    };

    hamburger.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
  });