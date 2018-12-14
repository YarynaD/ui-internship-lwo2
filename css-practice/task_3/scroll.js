/* global document */
(function() {
  const header = document.getElementById('myHeadline');
  function toScroll() {
    if (pageYOffset > 50) {
      header.classList.add('movingHeader');
    } else {
      header.classList.remove('movingHeader');
    }
  }
  window.addEventListener('scroll', toScroll);
})();
