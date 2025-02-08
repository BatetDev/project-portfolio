// Initialize Lucide icons
lucide.createIcons();

// Select the hamburger menu icon and the navbar
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

// Add click event listener to toggle the 'visible' class
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('visible');
});