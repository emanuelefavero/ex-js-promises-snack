/** @fileoverview Soluzioni degli esercizi (snacks). */

console.log('De-commenta i tests di questo file per verificare le soluzioni');

// SNACK 1
{
  const BASE_URL = 'https://dummyjson.com';
  const ENDPOINTS = Object.freeze({
    posts: 'posts',
    users: 'users',
  });

  const getUrl = (...args) => [BASE_URL, ...args].join('/');

  const getPostTitle = id =>
    new Promise((resolve, reject) => {
      fetch(getUrl(ENDPOINTS.posts, id))
        .then(res => res.json())
        .then(({ title }) => resolve(title))
        .catch(reject);
    });

  getPostTitle(1).then(console.log).catch(console.log);
}
