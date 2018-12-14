/* global document */
(function() {
  const accordion = document.getElementsByClassName('accordion-heading');
  let panel = document.getElementsByClassName('panel');

  for (let i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function() {
      let classSwitch = !this.classList.contains('active');
      setClass(accordion, 'active', 'remove');
      setClass(panel, 'show', 'remove');

      if (classSwitch) {
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('show');
      }
    };
  }

  function setClass(el, className, func) {
    for (let i = 0; i < el.length; i++) {
      el[i].classList[func](className);
    }
  }

  document.getElementById('default-open').click();

  function activateTab(evt) {
    const tab = evt.target;
    const dataId = tab.getAttribute('data-id');
    const tabImage = document.getElementsByClassName('accord-img');
    for (let i = 0; i < accordion.length; i++) {
      tabImage[i].classList.remove('tabSwitch');
    }
    const activeImage = document.getElementById(dataId);
    activeImage.classList.add('tabSwitch');
  }
  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', activateTab, true);
  }
})();
