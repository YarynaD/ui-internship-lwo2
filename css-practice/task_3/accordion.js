/* global document */

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

