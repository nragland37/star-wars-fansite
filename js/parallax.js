function applyParallaxEffect() {
    const bgElement = document.querySelector('.header-img');
    if (!bgElement) return;

    // Function to detect mobile devices
    function isMobileDevice() {
        return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    }

    if (isMobileDevice()) {
        // On mobile: simulate parallax with scroll effect
        window.addEventListener('scroll', function () {
            const scrollPosition = window.scrollY;
            bgElement.style.backgroundAttachment = 'scroll'; // Ensure no fixed attachment
            bgElement.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        });
    } else {
        // On desktop: ensure background-attachment is fixed for native parallax
        bgElement.style.backgroundAttachment = 'fixed';
    }
}

applyParallaxEffect();
