function applyParallaxEffect() {
    const bgElement = document.querySelector('.header-img');
    
    if (!bgElement) return;

    const isMobile = window.innerWidth <= 768;

    function updateBackgroundPosition(scrollPosition) {
        if (isMobile) {
            bgElement.style.backgroundPositionY = (scrollPosition * 0.3) + 'px';  // Adjust this ratio for a better effect
        } else {
            bgElement.style.backgroundAttachment = 'fixed';
        }
    }

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        updateBackgroundPosition(scrollPosition);
    });
}

applyParallaxEffect();
