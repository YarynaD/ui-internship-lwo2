/* eslint-disable */
(function() {
  const modal = document.getElementById('myModal');
  const images = Array.from(document.getElementsByClassName('myImages'));
  const modalImg = document.getElementById('img01');
  const captionText = document.getElementById('caption');
  
  for (let i = 0; i < images.length; i++) {
    let img = images[i];
    img.onclick = function() {
      modal.style.display = 'block';
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    };
  }
  
  let span = document.getElementsByClassName('modal')[0];
  
  span.onclick = function() {
    modal.style.display = 'none';
  };
})();

