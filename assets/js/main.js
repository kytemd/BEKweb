const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// to open menu
const openMenu = () => {
  navMenu.classList.add('show-menu');
}

// to close menu
const closeMenu = () => {
  navMenu.classList.remove('show-menu');
}

// toggle with hamburger button
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.contains('show-menu');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });
}

// close with x button
if (navClose) {
  navClose.addEventListener('click', closeMenu);
}

// close when clicking a link (only for mobile)
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 1150) {
      closeMenu();
    }
  });
});

