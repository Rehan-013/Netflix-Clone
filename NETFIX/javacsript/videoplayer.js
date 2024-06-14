document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('myVideo');
  
    // Play/Pause button
    const playPauseButton = document.getElementById('playPauseButton');
    playPauseButton.addEventListener('click', function () {
      if (video.paused || video.ended) {
        video.play();
        playPauseButton.textContent = 'Pause';
      } else {
        video.pause();
        playPauseButton.textContent = 'Play';
      }
    });
  
    // Mute/Unmute button
    const muteButton = document.getElementById('muteButton');
    muteButton.addEventListener('click', function () {
      if (video.muted) {
        video.muted = false;
        muteButton.textContent = 'Mute';
      } else {
        video.muted = true;
        muteButton.textContent = 'Unmute';
      }
    });
  
    // Fullscreen button
    const fullscreenButton = document.getElementById('fullscreenButton');
    fullscreenButton.addEventListener('click', function () {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
      }
    });
  
    // Update progress bar
    video.addEventListener('timeupdate', function () {
      const progressBar = document.getElementById('progressBar');
      const progress = (video.currentTime / video.duration) * 100;
      progressBar.value = progress;
    });
  
    // Seek video on progress bar click
    const progressBar = document.getElementById('progressBar');
    progressBar.addEventListener('input', function () {
      const seekTime = (progressBar.value / 100) * video.duration;
      video.currentTime = seekTime;
    });
  });
  