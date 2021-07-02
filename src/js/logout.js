import axios from 'axios';
import { success, error } from '@pnotify/core';
import refs from './helpers/references';
import { changePage } from './helpers/workWithForm';
require('dotenv').config();

const start = refs.logoutEvent ? refs.logoutEvent.classList.contains('logout') : null;
start && refs.logoutEvent.addEventListener('click', handleLogout);

async function handleLogout(e) {
  try {
    axios.defaults.headers.common.Authorization = localStorage.getItem('token');
    await axios.post(process.env.SERVER_ADDRESS + '/auth/logout');
    axios.defaults.headers.common.Authorization = null;
    localStorage.removeItem('token');
    success({ text: 'Success!' });
    changePage('/');
  } catch (err) {
    console.log(err);
    error({ text: JSON.parse(err.request.response).message });
  }
}
