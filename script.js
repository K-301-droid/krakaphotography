// Burger menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const menuOverlay = document.getElementById('menuOverlay');

  menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    menuOverlay.classList.toggle('active');
  });

  // Close menu when clicking outside
  menuOverlay.addEventListener('click', function(e) {
    if (e.target === menuOverlay) {
      menuToggle.classList.remove('active');
      menuOverlay.classList.remove('active');
    }
  });
});

