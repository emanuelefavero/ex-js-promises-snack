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
  // getPostTitle(1).then(console.log).catch(console.error);
  // getPost(1).then(console.log).catch(console.error);
}

// SNACK 2
{
  // Config
  const DICE_SIDES = 6;
  const DELAY_MS = 3000;
  const FAILURE_PROBABILITY = 0.2;
  const REJECT_MESSAGE = 'Dado incastrato';

  // Utils
  const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  // SNACK 2 - lanciaDado
  const lanciaDado = () =>
    new Promise((resolve, reject) => {
      console.log('Dado lanciato...');

      setTimeout(() => {
        if (Math.random() < FAILURE_PROBABILITY)
          return reject(new Error(REJECT_MESSAGE));

        resolve(getRandomInt(1, DICE_SIDES));
      }, DELAY_MS);
    });

  // SNACK 2 - creaLanciaDado (Bonus)
  const creaLanciaDado = () => {
    let lastResult = null;

    return () =>
      lanciaDado().then(diceNum => {
        if (diceNum === lastResult) {
          console.log('Incredibile!');
        }

        lastResult = diceNum;

        return diceNum;
      });
  };

  // Run
  const dado = creaLanciaDado();
  dado().then(console.log).catch(console.error);
}
