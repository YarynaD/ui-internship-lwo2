function toScroll() {
  const header = document.getElementById('myP');
  if (pageYOffset > 50) {
    header.classList.add('test');
  } else {
    header.classList.remove('test');
  }
}

window.addEventListener('scroll', toScroll);


