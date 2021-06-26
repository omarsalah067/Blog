import axios from 'axios';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/PNotify.css';
import { success, error, defaults } from '@pnotify/core';
require('dotenv').config();

defaults.styling = 'material';

const form = document.querySelector('.registration-form');
form.addEventListener('submit', handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const data = {};
  formData.forEach((value, name) => {
    data[name] = value;
  });

  try {
    const answer = await axios.post(`${process.env.SERVER_ADDRESS}/auth/register`, data);
    success({ text: answer.data.message });
  } catch (err) {
    error({ text: JSON.parse(err.request.response).message });
  }
}

// const input = document.querySelector('.registration-form> input');
// input.addEventListener('input', callback);

// function callback(e) {
//   console.log(e.target.value);
// }
