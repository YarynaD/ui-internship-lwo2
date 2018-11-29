window.addEventListener('scroll', function() {
    const header = document.querySelector('.headline');
    if (pageYOffset > 1) {
        header.classList.add('test');
      } else {
        header.classList.remove('test');
      }
});


 

