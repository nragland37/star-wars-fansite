function applyParallaxEffect() {
    if (window.innerWidth <= 768) {
        document.addEventListener('DOMContentLoaded', function () {
            let lastKnownScrollPosition = 0;
            let ticking = false;

            function updateBackgroundPosition() {
                var bgElement = document.querySelector('.header-img');
                if (bgElement) {
                    bgElement.style.backgroundPositionY = (lastKnownScrollPosition * 0.5) + 'px';
                }
            }

            window.addEventListener('scroll', function () {
                lastKnownScrollPosition = window.scrollY;
                if (!ticking) {
                    window.requestAnimationFrame(function () {
                        updateBackgroundPosition();
                        ticking = false;
                    });
                    ticking = true;
                }
            });
        });
    }
}

applyParallaxEffect(); // Activate the effect
