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
    const done = await axios.post(process.env.SERVER_ADDRESS + '/auth/logout');
    if (done) {
      axios.defaults.headers.common.Authorization = null;
      localStorage.removeItem('token');
      success({ text: 'Success!' });
      changePage('./index.html');
    }
  } catch (err) {
    console.log(err.message);
    err.request && error({ text: JSON.parse(err.request.response).message });
    localStorage.removeItem('token');
    changePage('/');
  }
}
