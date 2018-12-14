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

const videoAPI = {
  init: () => {
    ppbutton.addEventListener('click', playPause);
  },
};

export default videoAPI;
