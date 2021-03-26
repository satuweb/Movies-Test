# Movies test

## Questo progetto è stato bootstrappato con Create React App

(https://github.com/facebook/create-react-app).

## Librerie utilizzate 

### Axios

### React Redux

### Redux

### Redux Saga

### React Router Dom

## Note
**Non avendo ricevuto il token per l'autenticazione delle API, ho utilizzato un mock che trovate in fakeData.js nella src del progetto**

**Per attivare le API basta inserire il TOKEN di auth nel file fetchData/axios-records. Inoltre è necessario attivare l'istanza axios nel file store/sagas/movies e quindi...**

sostituire

```js
yield new Promise(resolve => setTimeout(resolve, 1000));
```
con

```js
const response = yield axios.get('/movie/popular');
```