/* eslint-disable;*/
let prevClick = document.getElementById('tab1');
function myActivate(inputId) {
  description = Array.from(document.getElementsByClassName('tab-description'));
  description.forEach((element) => {
    element.style.display = 'none';
  });
  document.getElementById('t' + inputId).style.display = 'block';
}

function mySwitch() {
  prevClick.classList.toggle('act');

  myActivate(this.id);

  this.classList.toggle('act');

  prevClick = this;
}
myActivate('tab1');
prevClick.classList.toggle('act');

let myTabs = Array.from(document.getElementsByClassName('tab'));

myTabs.forEach(function(element) {
  element.addEventListener('click', mySwitch, false);
});
