function applyParallaxEffect() {
    const bgElement = document.querySelector('.header-img');
    
    if (!bgElement) return;
  
    const isMobile = window.innerWidth <= 768;
  
    function updateBackgroundPosition(scrollPosition) {
      if (isMobile) {
        // Simulate parallax effect by adjusting background position on mobile
        bgElement.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    }
  
    window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;
      updateBackgroundPosition(scrollPosition);
    });
  }
  
  applyParallaxEffect();
  