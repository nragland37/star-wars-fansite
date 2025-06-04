window.addEventListener('DOMContentLoaded', function () {
  const audioElement = document.getElementById('themeAudio');
  const playButton = document.getElementById('audioToggle');
  const delayBeforePlay = 7000; // 7-second delay before autoplay

  // Function to update the play/pause button text
  function updatePlayButton() {
    if (audioElement.paused) {
      playButton.textContent = 'Play';
    } else {
      playButton.textContent = 'Pause';
    }
  }

  // Autoplay after delay
  setTimeout(function () {
    audioElement.play().then(() => {
      updatePlayButton(); // Ensure button updates to 'Pause' after autoplay
    }).catch(() => {
      console.log('Autoplay blocked. User needs to press play.');
    });
  }, delayBeforePlay);

  // Play/Pause button functionality
  playButton.addEventListener('click', function () {
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
    updatePlayButton(); // Update button state after user interaction
  });
});
