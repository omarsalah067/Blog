import axios from 'axios';
import { success, error } from '@pnotify/core';
import refs from './helpers/references';
import { changePage } from './helpers/workWithForm';
require('dotenv').config();

const start = refs.logout.classList.contains('logout-link');
start && refs.logout.addEventListener('submit', handleLogout);

async function handleLogout(e) {
  try {
    await axios.post(process.env.SERVER_ADDRESS + '/auth/logout');
    localStorage.removeItem('token');
    axios.defaults.headers.common.Authorization = null;
    success({ text: 'Success!' });
    changePage('/');
  } catch (err) {
    error({ text: JSON.parse(err.request.response).message });
  }
}
