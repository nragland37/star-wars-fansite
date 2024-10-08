window.addEventListener('DOMContentLoaded', function () {
  const audioElement = document.getElementById('themeAudio');

  setTimeout(function () {
    audioElement.play().catch((e) => {
      console.log('Autoplay blocked, waiting for user interaction:', e);
    });
  }, 7000); // 7 seconds (align with the logo animation)

  audioElement.addEventListener('click', function () {
    if (audioElement.paused) {
      audioElement.play();  // Play if the audio is paused
    } else {
      audioElement.pause(); // Pause if the audio is playing
    }
  });
});
