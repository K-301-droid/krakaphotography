// Simple JavaScript for enhanced user experience
document.addEventListener('DOMContentLoaded', function() {
  // Add click event for images (can be extended to lightbox)
  const images = document.querySelectorAll('.photo-grid img');
  
  images.forEach(img => {
    img.addEventListener('click', function() {
      // Can add lightbox functionality here later
      console.log('Image clicked:', this.src);
    });
  });

  // Smooth scroll for anchor links (if navigation is added later)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

