import axios from 'axios';
import { success, error } from '@pnotify/core';
import refs from './helpers/references';
import { takeFormData, changePage } from './helpers/workWithForm';
import { SERVER_ADDRESS } from './helpers/constants';

const start = refs.body.classList.contains('registration-page');
start && refs.registrationForm.addEventListener('submit', handleRegistrationSubmit);

async function handleRegistrationSubmit(e) {
  const data = takeFormData(e);
  try {
    const answer = await axios.post(SERVER_ADDRESS + '/auth/register', data);
    if (answer.data) {
      success({ text: answer.data.message });
      changePage('./login.html');
    }
  } catch (err) {
    console.log(err.message);
    err.request.response && error({ text: JSON.parse(err.request.response).message });
  }
}
