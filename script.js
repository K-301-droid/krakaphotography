// Burger menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const menuDropdown = document.getElementById('menuDropdown');
  const heroImage = document.querySelector('.hero-image');

  menuToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    menuToggle.classList.toggle('active');
    menuDropdown.classList.toggle('active');
  });

  // Submenu toggle functionality
  const submenuToggles = document.querySelectorAll('.submenu-toggle');
  submenuToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const parent = this.closest('.menu-item-with-submenu');
      parent.classList.toggle('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!menuToggle.contains(e.target) && !menuDropdown.contains(e.target)) {
      menuToggle.classList.remove('active');
      menuDropdown.classList.remove('active');
    }
  });

  // Change menu color based on scroll position (home page only)
  if (heroImage && document.body.classList.contains('home-page')) {
    function updateMenuColor() {
      const heroBottom = heroImage.offsetTop + heroImage.offsetHeight;
      const scrollPosition = window.scrollY + 100; // Add some offset for smooth transition
      
      if (scrollPosition >= heroBottom) {
        menuToggle.classList.add('scrolled-past-hero');
      } else {
        menuToggle.classList.remove('scrolled-past-hero');
      }
    }

    // Check on scroll
    window.addEventListener('scroll', updateMenuColor);
    // Check on page load
    updateMenuColor();
  }

  // Ensure fonts are loaded for intro text
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function() {
      const introText = document.querySelector('.intro-text');
      const introDate = document.querySelector('.intro-date');
      if (introText) {
        introText.style.fontFamily = "'Cormorant Garamond', 'Playfair Display', 'Eagle Lake', 'Times New Roman', Times, serif";
      }
      if (introDate) {
        introDate.style.fontFamily = "'Cormorant Garamond', 'Playfair Display', 'Eagle Lake', 'Times New Roman', Times, serif";
      }
    });
  }
});

