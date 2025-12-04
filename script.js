// Burger menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const menuDropdown = document.getElementById('menuDropdown');

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
});

