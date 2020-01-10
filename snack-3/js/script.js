
// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for e while

// CICLO FOR

// var somma = 0;
// for (var i = 0; i < 5; i++) {
//   var utente = parseInt(prompt('Inserisci un numero'));
//   somma = somma + utente;
// }
// console.log(somma);

// ***************************************************************************

// CICLO WHILE

var somma = 0;
var i = 0;

while (i < 5) {
  var utente = parseInt(prompt('Inserisci un numero'));
  somma = somma + utente;
  i++;
}
console.log(somma);
