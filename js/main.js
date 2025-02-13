// Initialize Lucide icons
lucide.createIcons();

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('visible');
  // Prevent scroll when menu is open
  document.body.style.overflow = navbar.classList.contains('visible') ? 'hidden' : '';
});

// Close menu when clicking a link
navbar.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('visible');
    document.body.style.overflow = '';
  });
});