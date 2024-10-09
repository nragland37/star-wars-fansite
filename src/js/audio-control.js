window.addEventListener('DOMContentLoaded', function () {
  const audioElement = document.getElementById('themeAudio');
  const playButton = document.getElementById('audioToggle');
  const delayBeforePlay = 7000; // 7-second delay before autoplay

  // Detect if it's a mobile device
  function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
  }

  // Autoplay for desktop after delay
  if (!isMobileDevice()) {
    setTimeout(function () {
      audioElement.play().catch(() => {
        console.log('Autoplay blocked, user needs to press play');
      });
    }, delayBeforePlay);
  }

  // Play/Pause button functionality
  playButton.addEventListener('click', function () {
    if (audioElement.paused) {
      audioElement.play();
      playButton.textContent = 'Pause';
    } else {
      audioElement.pause();
      playButton.textContent = 'Play';
    }
  });
});
