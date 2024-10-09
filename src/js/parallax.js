function applyParallaxEffect() {
    const isMobile = window.innerWidth <= 768;
    const bgElement = document.querySelector('.header-img');

    if (!bgElement) return;

    if (isMobile) {
        document.addEventListener('DOMContentLoaded', function () {
            let lastKnownScrollPosition = 0;
            let ticking = false;

            function updateBackgroundPosition() {
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
    } else {
        // Ensure background-attachment remains fixed on larger screens
        bgElement.style.backgroundAttachment = 'fixed';
    }
}

applyParallaxEffect(); 
