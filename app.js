  const menuToggle = document.getElementById('mobile-menu');
  const navbar = document.getElementById('navbar');

  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
  });