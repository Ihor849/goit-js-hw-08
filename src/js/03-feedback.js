import throttle from 'lodash.throttle';

let currentKey = 'feedback-form-state';
let formData = {};
// const savedValues = localStorage.getItem(currentKey);
// const savedDataObject = JSON.parse(savedValues);
// console.log(currentKey);

const formEl = document.querySelector('.feedback-form');
// console.log(formEl);
const emailEl = formEl.firstElementChild;
// console.log(emailEl);
const messageEl = emailEl.nextElementSibling;
// console.log(messageEl);

const refs = {
  formEl: document.querySelector('.feedback-form'),
  emailEl: formEl.firstElementChild,
  messageEl: emailEl.nextElementSibling,
};

refs.formEl.addEventListener('submit', onFormSubmit);
refs.formEl.addEventListener('input', throttle(storageFormData, 500));

function onFormSubmit(evt) {
  let currentEmail = evt.currentTarget.email.value;
  let currentMessage = evt.currentTarget.message.value;
  evt.preventDefault();

  storageFormData(evt);

  validatesFormCompletion(`${currentEmail}`, `${currentMessage}`);
}

function storageFormData(evt) {
  let currentEmail = evt.currentTarget.email.value;
  let currentMessage = evt.currentTarget.message.value;

  localStorage.setItem('email', `${currentEmail}`);
  localStorage.setItem('message', `${currentMessage}`);
  // console.log(localStorage.getItem('email'));
  // console.log(localStorage.getItem('message'));

  formData.Email = currentEmail;
  formData.Message = currentMessage;

  console.log(formData);
}
// reloadPage(evt);

function reloadPage(evt) {
  // console.log(evt.currentTarget.email.value);
  // for (let key in localStorage) {
  //   console.log(key);

  if (
    evt.currentTarget.email.value === '' ||
    evt.currentTarget.message.value === ''
  ) {
    evt.currentTarget.email.value = localStorage.getItem('email');
    evt.currentTarget.message.value = localStorage.getItem('message');
    console.log('вносіт значення');
  }
  // }
}

function validatesFormCompletion(email, message) {
  if (email === '' || message === '') {
    // console.log(typeof `${currentEmail}`);
    return console.log('ЗАПОЛНИТЕ ПОЛЯ');
  }
  event.currentTarget.reset();
  localStorage.removeItem('message');
  localStorage.removeItem('email');
  console.log(localStorage.getItem('message'));
  console.log(localStorage.getItem('email'));
}
