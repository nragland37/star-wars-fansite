function applyParallaxEffect() {
    // built-in event, 'DOMContentLoaded' ensures initial HTML document has been completely loaded and parsed
    document.addEventListener('DOMContentLoaded', function () {
        window.addEventListener('scroll', function () {
            var scrollPosition = window.scrollY; 
            var bgElement = document.querySelector('.header-img');
            if (bgElement) {
                // Parallax effect - move background image at half the speed of scroll
                bgElement.style.backgroundPositionY = scrollPosition * 0.5 + 'px'; 
            }
        });
    });
}

applyParallaxEffect(); 