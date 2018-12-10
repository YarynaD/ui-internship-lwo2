/* global document */

const sliderArray = [...document.querySelectorAll('.slider')];
const slides = [...document.querySelectorAll('.slide-holder')];
let counter = 0;

let firslTimeFlag = 1;

for (let i = 0; i < sliderArray.length; i++) {
  slides[i].classList.add('init34');
}

sliderArray.forEach((el) => {
  el.addEventListener('click', function(e) {

    if (firslTimeFlag) {
      for (let i = 0; i < sliderArray.length; i++) {
        slides[i].classList.remove('init34');
      }
    }

    if (e.target.classList.contains('scroll-left')) {
      counter--;
      if (counter < -1) {
        counter = -1;
      }
    } else if ( e.target.classList.contains('scroll-right')) {
      counter++;
      if (counter > 1) {
        counter = 1;
      }
    }

    switch (counter) {
      case -1:
        for (let i = 0; i < sliderArray.length; i++) {
          slides[i].classList.remove('scroll34');
          slides[i].classList.add('scroll0');
        }
        break;
      case 0:
        for (let i = 0; i < sliderArray.length; i++) {
          slides[i].classList.add('scroll34');
          slides[i].classList.remove('scroll67');
        }
        break;
      case 1:
        for (let i = 0; i < sliderArray.length; i++) {
          slides[i].classList.remove('scroll34');
          slides[i].classList.add('scroll67');
        }
        break;
      default:
        break;
    }
  }, false);
});
