import axios from 'axios';
import FormData from 'form-data';
import { success, error } from '@pnotify/core';
import refs from './helpers/references';
import { SERVER_ADDRESS } from './helpers/constants';
import { changePage } from './helpers/workWithForm';

const start = refs.body.classList.contains('create-article-page');
start && refs.postForm.addEventListener('submit', handlePostSubmit);

async function handlePostSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const titleInput = form.elements.title;
  const textInput = form.elements.text;
  const imageInput = form.elements.image;

  const formData = new FormData();
  formData.append(titleInput.name, titleInput.value);
  formData.append(textInput.name, textInput.value);
  formData.append(imageInput.name, imageInput.files[0]);

  try {
    axios.defaults.headers.common.Authorization = localStorage.getItem('token');
    const done = await axios.post(`${SERVER_ADDRESS}/api/articles`, formData);
    if (done) {
      success({ text: 'Success!' });
      changePage('/CSPW210-frontend/');
    }
  } catch (err) {
    console.log(err.message);
    err.request.response && error({ text: JSON.parse(err.request.response).message });
  }
}
