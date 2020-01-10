// STAMPA IL NUMERO PIù GRANDE

var utente1 = parseInt(prompt('Scrivi un numero'));
var utente2 = parseInt(prompt('Scrivi un numero'));

// 1 METODO

// if (utente1 > utente2) {
//   console.log(utente1);
// } else if (utente1 < utente2) {
//   console.log(utente2);
// } else {
//   console.log('Stesso numero');
// }
//
// // ***************************************************************************
//
// // 2 METODO
//
// if (utente1 == utente2) {
//   alert('Hai inserito lo stesso numero')
// }
//
// if (utente1 > utente2) {
//   console.log(utente1);
// } else {
//   console.log(utente2);
// }

// ***************************************************************************

// 3 METODO

var messaggio = 'Hai inserito lo stesso numero';

if (utente1 > utente2) {
  messaggio = utente1;
} else if (utente1 < utente2) {
  messaggio = utente2
  }

console.log(messaggio);
