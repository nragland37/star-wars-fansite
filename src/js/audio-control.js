window.addEventListener('DOMContentLoaded', function () {
  const audioElement = document.getElementById('themeAudio');
  const delayBeforePlay = 7000; // Delay before autoplay in milliseconds

  function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
  }

  if (!isMobileDevice()) {
    setTimeout(function () {
      audioElement.play().catch((e) => {
        console.log('Autoplay blocked, waiting for user interaction:', e);
      });
    }, delayBeforePlay);
  } else {
    console.log('Autoplay blocked on mobile. User needs to interact with the audio controls.');
  }

  audioElement.addEventListener('click', function () {
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  });
});
