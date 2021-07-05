import refs from './helpers/references';

try {
  const token = localStorage.getItem('token');
  refs.loadMore && refs.loadMore.classList.remove('hidden');

  if (token) {
    refs.login && refs.login.classList.add('hidden');
    refs.registration && refs.registration.classList.add('hidden');
    refs.newPost && refs.newPost.classList.remove('hidden');
    refs.logout && refs.logout.classList.remove('hidden');
  } else {
    refs.login && refs.login.classList.remove('hidden');
    refs.registration && refs.registration.classList.remove('hidden');
    refs.newPost && refs.newPost.classList.add('hidden');
    refs.logout && refs.logout.classList.add('hidden');
  }
} catch (err) {
  console.log(err.message);
}
