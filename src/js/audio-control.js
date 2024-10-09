window.addEventListener('DOMContentLoaded', function () {
  const audioElement = document.getElementById('themeAudio');
  let isAudioPlayed = false; 

  function playAudioOnInteraction() {
    if (!isAudioPlayed) {
      audioElement.play().then(() => {
        isAudioPlayed = true; 
      }).catch((e) => {
        console.log('Autoplay blocked, waiting for user interaction:', e);
      });
    }
  }

  ['click', 'touchstart'].forEach(eventType => {
    window.addEventListener(eventType, playAudioOnInteraction, { once: true });
  });

  audioElement.addEventListener('click', function () {
    if (audioElement.paused) {
      audioElement.play().catch((e) => {
        console.log('Error playing audio:', e);
      });
    } else {
      audioElement.pause();
    }
  });
});
