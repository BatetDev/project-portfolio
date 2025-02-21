// Initialize Lucide icons
lucide.createIcons();

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu
const toggleMenu = () => {
  navbar.classList.toggle('visible');
  document.body.style.overflow = navbar.classList.contains('visible') ? 'hidden' : '';
  
  // Get the current icon container
  const iconContainer = menuIcon.querySelector('[data-lucide]') || menuIcon.querySelector('i');
  const isMenuVisible = navbar.classList.contains('visible');
  
  // Remove existing icon
  iconContainer.remove();
  
  // Create new icon element
  const newIcon = document.createElement('i');
  newIcon.setAttribute('data-lucide', isMenuVisible ? 'x' : 'menu');
  newIcon.className = 'w-10 h-10';
  menuIcon.appendChild(newIcon);
  
  // Create the new icon
  lucide.createIcons();
};

menuIcon.addEventListener('click', toggleMenu);

// Close menu when clicking links
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('visible');
    document.body.style.overflow = '';
  });
});

// Set active link based on current section
const setActiveLink = () => {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.removeAttribute('aria-current');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.setAttribute('aria-current', 'page');
        }
      });
    }
  });
};

window.addEventListener('scroll', setActiveLink);