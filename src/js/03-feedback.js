// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';

// const formData = {};

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('.feedback-form textarea'),
//   email: document.querySelector('.feedback-form input'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onFormInput, 500));

// populateFormData();

// function onFormSubmit(e) {
//   e.preventDefault();

//   const submitData = localStorage.getItem(STORAGE_KEY);
//   const parsedSubmitData = JSON.parse(submitData);
//   if (parsedSubmitData) {
//     console.log(parsedSubmitData);
//   }

//   e.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// function onFormInput(e) {
//   formData[e.target.name] = e.target.value;

//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }

// function populateFormData() {
//   if (localStorage.getItem(STORAGE_KEY)) {
//     const saveData = localStorage.getItem(STORAGE_KEY);
//     formData = JSON.parse(saveData);
//   }

//   if (formData.email) {
//     refs.input.value = formData.email;
//   }

//   if (formData.message) {
//     refs.textarea.value = formData.message;
//   }
// }

// ADREYS CODE
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener('input', throttle(onFormInput, 500));

populateFormData();

function onFormSubmit(e) {
  e.preventDefault();

  const submitData = localStorage.getItem(STORAGE_KEY);
  const parsedSubmitData = JSON.parse(submitData);
  if (parsedSubmitData) {
    console.log(parsedSubmitData);
  }

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFormData() {
  if (localStorage.getItem(STORAGE_KEY)) {
    const saveData = localStorage.getItem(STORAGE_KEY);
    formData = JSON.parse(saveData);
  }

  if (formData.email) {
    refs.input.value = formData.email;
  }

  if (formData.message) {
    refs.textarea.value = formData.message;
  }
}
