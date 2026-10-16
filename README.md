# EX - Snack Oggetti

Esercizi di promises in JavaScript, dal mio corso web dev (specializzazione Frontend)

## Avvio

Con Node.js e npm installati, dalla cartella del progetto:

```bash
npm run dev
```

Lo script esegue [soluzioni.js](soluzioni.js), dove sono presenti le soluzioni agli esercizi.

## Snack 1

Ottieni il titolo di un post con una Promise.

Crea una funzione `getPostTitle(id)` che accetta un id e restituisce una Promise che recupera il titolo di un post dal link `https://dummyjson.com/posts/{id}`

### Bonus: Ottieni l'intero post con l'autore

Crea una funzione `getPost(id)` che recupera l'intero post. Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, recuperati dalla chiamata `https://dummyjson.com/users/{post.userId}`.

## Snack 2

Crea la funzione `lanciaDado()` che restituisce una **Promise** che, dopo 3 secondi, genera un numero casuale tra _1 e 6_. Tuttavia, nel _20%_ dei casi, il dado si "incastra" e la Promise va in **reject**.

### Bonus: HOF con closure per memorizzare l'ultimo lancio

Modifica la funzione in `creaLanciaDado()`, che restituisce una **closure** che memorizza l'ultimo risultato. Se il numero esce **due volte di fila**, stampa "Incredibile!".
