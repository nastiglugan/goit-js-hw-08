import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(getFormValue, 500));
form.addEventListener('submit', resetForm);
window.addEventListener('load', onLoadPage);

//1
function getFormValue(evt) {
  const formValue = {
    email: form.email.value,
    message: form.message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formValue));
}

//2
function onLoadPage(evt) {
  if (localStorage.getItem('feedback-form-state')) {
    const { email, message } = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
    form.email.value = email;
    form.message.value = message;
  }
}

//3
function resetForm(evt) {
  evt.preventDefault();

  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

  evt.currentTarget.reset();
  localStorage.clear();
}
