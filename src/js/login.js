import axios from 'axios';
import { success, error } from '@pnotify/core';
import refs from './helpers/references';
import { takeFormData, changePage } from './helpers/workWithForm';
require('dotenv').config();

const start = refs.body.classList.contains('login-page');
start && refs.loginForm.addEventListener('submit', handleLoginSubmit);

async function handleLoginSubmit(e) {
  const data = takeFormData(e);
  try {
    const answer = await axios.post(process.env.SERVER_ADDRESS + '/auth/login', data);
    if (answer.data) {
      localStorage.setItem('token', `Bearer ${answer.data.token}`);
      success({ text: 'Success!' });
      changePage('/');
    }
  } catch (err) {
    console.log(err.message);
    err.request && error({ text: JSON.parse(err.request.response).message });
  }
}
