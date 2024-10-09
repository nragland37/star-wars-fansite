window.addEventListener('DOMContentLoaded', function () {
    const logoElement = document.querySelector('.logo');
  
    function adjustLogoHeight() {
      // Convert 70vh to pixels for all screen sizes
      const vhInPixels = window.innerHeight * 0.7; // Adjust multiplier if needed
      logoElement.style.height = `${vhInPixels}px`;
    }
  
    // Adjust the logo height on page load
    adjustLogoHeight();
  
    // Adjust logo height on window resize
    window.addEventListener('resize', adjustLogoHeight);
  });
  