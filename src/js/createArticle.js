import axios from 'axios';
import { success, error } from '@pnotify/core';
import refs from './helpers/references';
import { takeFormData, changePage } from './helpers/workWithForm';
require('dotenv').config();

const start = refs.body.classList.contains('create-article-page');
start && refs.postForm.addEventListener('submit', handlePostSubmit);

async function handlePostSubmit(e) {
  const data = takeFormData(e);
  console.log(data);
  //   try {
  //     const answer = await axios.post(process.env.SERVER_ADDRESS + '/auth/register', data);
  //     success({ text: answer.data.message });
  //   } catch (err) {
  //     error({ text: JSON.parse(err.request.response).message });
  //   }
}
