function applyParallaxEffect() {
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

applyParallaxEffect(); // Call the function to activate the effect
