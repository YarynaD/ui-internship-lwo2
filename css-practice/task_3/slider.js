/* global document */

(function() {
  const sliderArray = [...document.querySelectorAll('.slider')];
  const sldr = [...document.querySelectorAll('.slide-holder')];
  let trFinished = 1;
  sliderArray.forEach((el) => {
    el.addEventListener('click', clickfunction, true);
  });
  sldr.forEach((el) => {
    el.addEventListener('transitionend', function(event) {
      trFinished = 1;
    }, false);
  });

  function clickfunction(e) {
    if (trFinished === 0) {
      return;
    }
    trFinished = 0;
    let motion = -33;
    if (e.target.classList.contains('scroll-left')) {
      motion = 33;
    }
    let slides = e.target.parentNode.getElementsByClassName('slide-holder')[0];
    let style = window.getComputedStyle(slides);
    let trans = style.transform;
    let numberPattern = /-*\d+/g;
    let values = trans.match( numberPattern );
    let computedTranslateX = values[4];
    let xPercentage = (computedTranslateX / slides.offsetWidth) * 100;
    let newX = xPercentage + motion;
    if (newX > 4 || newX <-70) {
      newX -= motion;
    }
    slides.style.transform = 'translateX(' + newX + '%)';
  }
})();

