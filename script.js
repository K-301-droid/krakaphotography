// Polyfill for Element.closest() for older browsers (including older Edge)
if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;
    do {
      if (Element.prototype.matches.call(el, s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

// Polyfill for Element.matches() for older browsers
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || 
                              Element.prototype.webkitMatchesSelector;
}

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

  // Match Sky main photo height to exactly 2 squares (including gap)
  function matchSkyHeights() {
    const skyGrid = document.querySelector('.sky-grid');
    const skyMain = document.querySelector('.sky-main');
    const skyGridImgs = document.querySelectorAll('.sky-grid-img');
    
    if (skyGrid && skyMain && skyGridImgs.length >= 2) {
      // Get the height of one square (first grid image)
      const firstImg = skyGridImgs[0];
      const squareHeight = firstImg.offsetHeight;
      
      // Get computed gap from grid (with fallback for older browsers)
      const gridStyle = window.getComputedStyle(skyGrid);
      let gap = 20; // default fallback
      if (gridStyle.gap) {
        gap = parseInt(gridStyle.gap) || 20;
      } else if (gridStyle.gridGap) {
        gap = parseInt(gridStyle.gridGap) || 20;
      }
      
      // Height of 2 squares + gap between them
      const twoSquaresHeight = (squareHeight * 2) + gap;
      
      skyMain.style.height = twoSquaresHeight + 'px';
    }
  }

  // Match Animal main photo height to exactly 2 squares (including gap)
  function matchAnimalHeights() {
    const animalGrid = document.querySelector('.animal-grid');
    const animalMain = document.querySelector('.animal-main');
    const animalGridImgs = document.querySelectorAll('.animal-grid-img');
    
    if (animalGrid && animalMain && animalGridImgs.length >= 2) {
      // Get the height of one square (first grid image)
      const firstImg = animalGridImgs[0];
      const squareHeight = firstImg.offsetHeight;
      
      // Get computed gap from grid (with fallback for older browsers)
      const gridStyle = window.getComputedStyle(animalGrid);
      let gap = 20; // default fallback
      if (gridStyle.gap) {
        gap = parseInt(gridStyle.gap) || 20;
      } else if (gridStyle.gridGap) {
        gap = parseInt(gridStyle.gridGap) || 20;
      }
      
      // Height of 2 squares + gap between them
      const twoSquaresHeight = (squareHeight * 2) + gap;
      
      animalMain.style.height = twoSquaresHeight + 'px';
    }
  }

  // Match Wood main photo height to exactly 2 squares (including gap)
  function matchWoodHeights() {
    const woodGrid = document.querySelector('.wood-grid');
    const woodMain = document.querySelector('.wood-main');
    const woodGridImgs = document.querySelectorAll('.wood-grid-img');
    
    if (woodGrid && woodMain && woodGridImgs.length >= 2) {
      // Get the height of one square (first grid image)
      const firstImg = woodGridImgs[0];
      const squareHeight = firstImg.offsetHeight;
      
      // Get computed gap from grid (with fallback for older browsers)
      const gridStyle = window.getComputedStyle(woodGrid);
      let gap = 20; // default fallback
      if (gridStyle.gap) {
        gap = parseInt(gridStyle.gap) || 20;
      } else if (gridStyle.gridGap) {
        gap = parseInt(gridStyle.gridGap) || 20;
      }
      
      // Height of 2 squares + gap between them
      const twoSquaresHeight = (squareHeight * 2) + gap;
      
      woodMain.style.height = twoSquaresHeight + 'px';
    }
  }

  // Helper function to setup height matching for a section
  function setupHeightMatching(sectionClass, gridClass, mainClass, gridImgClass, mainImgClass, matchFunction) {
    if (document.querySelector(sectionClass)) {
      // Run immediately
      setTimeout(matchFunction, 100);
      
      // Run after layout
      requestAnimationFrame(function() {
        setTimeout(matchFunction, 100);
      });
      
      window.addEventListener('resize', function() {
        setTimeout(matchFunction, 100);
      });
      
      // Also run after images load
      const gridImages = document.querySelectorAll(gridImgClass);
      const mainImg = document.querySelector(mainImgClass);
      let loadedCount = 0;
      
      gridImages.forEach(img => {
        if (img.complete) {
          loadedCount++;
        } else {
          img.addEventListener('load', function() {
            loadedCount++;
            if (loadedCount === gridImages.length) {
              setTimeout(matchFunction, 100);
            }
          });
        }
      });
      
      if (mainImg) {
        if (mainImg.complete) {
          setTimeout(matchFunction, 100);
        } else {
          mainImg.addEventListener('load', function() {
            setTimeout(matchFunction, 100);
          });
        }
      }
      
      if (loadedCount === gridImages.length) {
        setTimeout(matchFunction, 100);
      }
    }
  }

  // Setup Sky section
  setupHeightMatching('.sky-section', '.sky-grid', '.sky-main', '.sky-grid-img', '.sky-main-img', matchSkyHeights);
  
  // Setup Animal section
  setupHeightMatching('.animal-section', '.animal-grid', '.animal-main', '.animal-grid-img', '.animal-main-img', matchAnimalHeights);
  
  // Setup Wood section
  setupHeightMatching('.wood-section', '.wood-grid', '.wood-main', '.wood-grid-img', '.wood-main-img', matchWoodHeights);
});

