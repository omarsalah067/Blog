import axios from 'axios';
import { error } from '@pnotify/core';
import articleTemplate from '../templates/article.hbs';
import refs from './helpers/references';
require('dotenv').config();

const start = refs.body.classList.contains('main-page');
start && getArticles();

async function getArticles() {
  try {
    const answer = await axios.get(process.env.SERVER_ADDRESS + '/api/articles');
    if (answer) {
      const markup = answer.data.docs.map(item => articleTemplate(item)).join('');
      refs.articles.insertAdjacentHTML('afterbegin', markup);
    }
  } catch (err) {
    console.log(err.message);
    err.request && error({ text: JSON.parse(err.request.response).message });
  }
}
