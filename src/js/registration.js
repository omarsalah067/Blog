import axios from 'axios';
import { success, error } from '@pnotify/core';
import refs from './helpers/references';
import { takeFormData, changePage } from './helpers/workWithForm';
require('dotenv').config();

const start = refs.body.classList.contains('registration-page');
start && refs.registrationForm.addEventListener('submit', handleRegistrationSubmit);

async function handleRegistrationSubmit(e) {
  const data = takeFormData(e);
  try {
    const answer = await axios.post(process.env.SERVER_ADDRESS + '/auth/register', data);
    success({ text: answer.data.message });
    changePage('/');
  } catch (err) {
    console.log(err);
    error({ text: JSON.parse(err.request.response).message });
  }
}

// const loginForm = document.querySelector('.login-form');
// const logout = document.querySelector('.log-out');

// loginForm && loginForm.addEventListener('submit', handleLoginSubmit);
// logout && logout.addEventListener('click', handleLogout);

async function handleLoginSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const data = {};
  formData.forEach((value, name) => {
    data[name] = value;
  });

  try {
    const answer = await axios.post(process.env.SERVER_ADDRESS + '/auth/login', data);
    axios.defaults.headers.common.Authorization = `Bearer ${answer.data.token}`;
    success({ text: 'Success!' });
  } catch (err) {
    error({ text: JSON.parse(err.request.response).message });
  }
}

async function handleLogout(e) {
  try {
    await axios.post(process.env.SERVER_ADDRESS + '/auth/logout');
    axios.defaults.headers.common.Authorization = null;
    success({ text: 'Success!' });
  } catch (err) {
    error({ text: JSON.parse(err.request.response).message });
  }
}
