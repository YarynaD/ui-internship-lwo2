/* eslint-disable */
const nameReg = /[a-zA-Z]+$/;
const mailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
const btn = document.getElementById('myBtn');

const test_rules = {'user_name': nameReg, 'user_mail': mailReg, 'user_password': passReg};
const test_passed = {'user_name': false, 'user_mail': false, 'user_password': false};

const myForm = document.querySelectorAll('form,input');
btn.disabled = true;

const newDisableFunc = function() {
  if (test_rules[this.name].test(this.value)) {
    this.style.outline = '2px solid green';
    test_passed[this.name] = true;
    btn.disabled = false;
    btn.classList.remove('disabled');
    for (let key in test_passed) {
      if (test_passed[key] === false) {
        btn.disabled = true;
        btn.classList.add('disabled');
        break;
      }
    }
  } else {
    this.style.outline = '2px solid red';
    test_passed[this.name] = false;
    btn.disabled = true;
    btn.classList.add('disabled');
  }
};

const formAPI = {
  init: () => {
    myForm.forEach(function(element) {
      element.addEventListener('blur', newDisableFunc, false);
    });
  },
};

export default formAPI;

