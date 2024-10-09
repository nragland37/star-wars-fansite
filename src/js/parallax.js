function applyParallaxEffect() {
    // Check if the screen width is less than or equal to 768 pixels
    // ONLY ativate for mobile devices
    // It's a cheeky workaround to get the parallax effect to work on mobile devices
    if (window.innerWidth <= 768) {
        document.addEventListener('DOMContentLoaded', function () {
            window.addEventListener('scroll', function () {
                var scrollPosition = window.pageYOffset;
                var bgElement = document.querySelector('.header-img');
                if (bgElement) {
                    bgElement.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
                }
            });
        });
    }
}

applyParallaxEffect(); 
