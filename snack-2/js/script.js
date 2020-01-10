// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.

var parola1 = prompt('Scrivi una parola');
var parola2 = prompt('Scrivi una parola');

// 1 METODO
//
// if (parola1.length < parola2.length) {
//   console.log(parola1 + ' ' + parola2);
// } else if (parola1.length > parola2.length) {
//   console.log(parola2 + ' ' + parola1);
// } else {
//   alert('Le parole inserite hanno la stessa lunghezza')
// }
//
// // ***************************************************************************
//
// // 2 METODO
//
// if (parola1.length == parola2.length) {
//   alert('Le parole inserite hanno la stessa lunghezza');
// }
//
// if (parola1.length < parola2.length) {
//   console.log(parola1 + ' ' + parola2);
// } else {
//   console.log(parola2 + ' ' + parola1);
// }
//
// // ***************************************************************************

// 3 METODO

var messaggio = 'Le parole inserite hanno la stessa lunghezza';

if (parola1.length < parola2.length) {
  messaggio = parola1 + ' ' + parola2;
} else if (parola1.length > parola2.length) {
  messaggio = parola2 + ' ' + parola1;
}

console.log(messaggio);
