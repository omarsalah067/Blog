import axios from 'axios';
import { error } from '@pnotify/core';
import articleTemplate from '../templates/article.hbs';
import refs from './helpers/references';
import { SERVER_ADDRESS } from './helpers/constants';

const start = refs.body.classList.contains('main-page');
start && getArticles();

async function getArticles() {
  try {
    const answer = await axios.get(SERVER_ADDRESS + '/api/articles');

    if (answer) {
      const markup = answer.data.docs
        .map(item => {
          const time = new Date(item.createdAt);
          item.createdAt = time.toLocaleString('en-US', {
            day: 'numeric',
            year: 'numeric',
            month: 'long',
            hour: 'numeric',
            minute: 'numeric',
          });

          return articleTemplate(item);
        })
        .join('');
      refs.articles.insertAdjacentHTML('afterbegin', markup);
    }
  } catch (err) {
    console.log(err.message);
    err.request.response && error({ text: JSON.parse(err.request.response).message });
  }
}
