import axios from 'axios';
import { error } from '@pnotify/core';
import articleTemplate from '../templates/article.hbs';
import refs from './helpers/references';
import { SERVER_ADDRESS } from './helpers/constants';

let pageCount;
const start = refs.body.classList.contains('main-page');
start && getArticles() && refs.loadMore.addEventListener('click', getMoreArticles);

async function getArticles() {
  try {
    const answer = await axios.get(SERVER_ADDRESS + '/api/articles');
    answer && insertMarkup(answer, 'afterbegin');
  } catch (err) {
    console.log(err.message);
    err.request.response && error({ text: JSON.parse(err.request.response).message });
  }
}

async function getMoreArticles() {
  try {
    const answer = await axios.get(SERVER_ADDRESS + '/api/articles', {
      params: {
        page: pageCount + 1,
      },
    });
    answer && insertMarkup(answer, 'beforeend');
  } catch (error) {
    console.log(err.message);
    err.request.response && error({ text: JSON.parse(err.request.response).message });
  }
}

function insertMarkup(answer, insertPlace) {
  pageCount = answer.data.page;
  if (answer.data.hasNextPage === false) {
    refs.loadMore.classList.add('hidden');
  }

  const articles = answer.data.docs.sort(function (a, b) {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const markup = articles
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

  refs.articles.insertAdjacentHTML(insertPlace, markup);
}
