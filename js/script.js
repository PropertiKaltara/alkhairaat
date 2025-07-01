const burgerMenu = document.getElementById('burger-menu');
const navbarNav = document.querySelector('.navbar-nav');

burgerMenu.addEventListener('click', () => {
  navbarNav.classList.toggle('active');
  burgerMenu.classList.toggle('active');
});

