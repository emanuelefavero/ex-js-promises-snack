/** @fileoverview Soluzioni degli esercizi (snacks). */

console.log('De-commenta i tests di questo file per verificare le soluzioni');

// SNACK 1
{
  // Config
  const BASE_URL = 'https://dummyjson.com';
  const ENDPOINTS = Object.freeze({
    posts: 'posts',
    users: 'users',
  });

  // Utils
  const getUrl = (...args) => [BASE_URL, ...args].join('/');
  const checkResponse = res => {
    if (!res.ok) throw new Error(`Error ${res.status}`);
    return res.json();
  };

  // SNACK 1 - getPostTitle
  const getPostTitle = id =>
    fetch(getUrl(ENDPOINTS.posts, id))
      .then(checkResponse)
      .then(({ title }) => title);

  // SNACK 1 - getPost (Bonus)
  const getPost = id =>
    fetch(getUrl(ENDPOINTS.posts, id))
      .then(checkResponse)
      .then(post =>
        fetch(getUrl(ENDPOINTS.users, post.userId))
          .then(checkResponse)
          .then(user => ({ ...post, user })),
      );

  // Run
  // getPostTitle(1).then(console.log).catch(console.log);
  // getPost(1).then(console.log).catch(console.log);
}

// SNACK 2
{
}
