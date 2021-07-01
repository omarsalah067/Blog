import axios from 'axios';
import { success, error, defaults } from '@pnotify/core';
require('dotenv').config();

defaults.styling = 'material';

const postForm = document.querySelector('.post-form');
postForm && postForm.addEventListener('submit', handlePostSubmit);

async function handlePostSubmit(e) {
  e.preventDefault();
  console.log(e);
  const form = e.currentTarget;
  const formData = new FormData(form);

  const data = {};
  formData.forEach((value, name) => {
    data[name] = value;
  });

  console.log(data);

  //   try {
  //     const answer = await axios.post(process.env.SERVER_ADDRESS + '/auth/register', data);
  //     success({ text: answer.data.message });
  //   } catch (err) {
  //     error({ text: JSON.parse(err.request.response).message });
  //   }
}
