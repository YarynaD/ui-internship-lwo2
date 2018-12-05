/* global document */

const sliderArray = [...document.querySelectorAll('.slider')];
const slides = [...document.querySelectorAll('.slide-holder')];
let counter = 1;
let counterR = 1;

sliderArray.forEach((el) => {
  el.addEventListener('click', function(e) {
    if (e.target.classList.contains('scroll-left')) {
      switch (counter++) {
        case 1:
          for (let i = 0; i <= sliderArray.length; i++) {
            slides[i].classList.add('left-scroll');
          }
          break;
        case 2:
          for (let i = 0; i <= sliderArray.length; i++) {
            slides[i].classList.add('left-scroll1');
          }
          break;
      }
    } else if ( e.target.classList.contains('scroll-right')) {
      switch (counterR++) {
        case 1:
          for (let i = 0; i <= sliderArray.length; i++) {
            slides[i].classList.add('right-scroll');
          }
          break;
        case 2:
          for (let i = 0; i <= sliderArray.length; i++) {
            slides[i].classList.add('right-scroll1');
          }
          break;
      }
    }
  });
});
