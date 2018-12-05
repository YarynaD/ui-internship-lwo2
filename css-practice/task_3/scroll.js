/* global document */

function toScroll() {
  const header = document.getElementById('myHeadline');
  if (pageYOffset > 50) {
    header.classList.add('movingHeader');
  } else {
    header.classList.remove('movingHeader');
  }
}

window.addEventListener('scroll', toScroll);


