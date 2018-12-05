const videoModule = (function() {
  const ppbutton = document.getElementById('vidbutton');
  const myVideo = document.getElementById('myvid');

  function playPause() {
    if (myVideo.paused) {
      myVideo.play();
      ppbutton.classList.add('play');
      ppbutton.classList.remove('pause');
    } else {
      myVideo.pause();
      ppbutton.classList.remove('play');
      ppbutton.classList.add('pause');
    }
  }

  return {
    init: () => {
      ppbutton.addEventListener('click', playPause);
    },
  };
})();

videoModule.init();
