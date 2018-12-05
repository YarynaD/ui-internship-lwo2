/* eslint-disable*/
const nameReg = /[a-zA-Z]+$/;
const mailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
const subjReg = /.{1,30}/;
const textAreaReg = /.{1,250}/;

const test_rules = {'user_name':nameReg, 'user_mail':mailReg, 'user_password':passReg, 'subject':subjReg, 'message':textAreaReg};

const myForm = document.querySelectorAll('form,input,textarea');

newColorFunc = function() {
  if (test_rules[this.name].test(this.value)) {
    this.style.outline = '2px solid green';
  } else {
    this.style.outline = '2px solid red';
  }
};

myForm.forEach(function(element) {
  element.addEventListener("blur", newColorFunc, false);
});
