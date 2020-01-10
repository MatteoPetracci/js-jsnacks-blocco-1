// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

// CICLO FOR

// var arrayVuoto = [];
//
// for (var i = 0; i < 6; i++) {
//   var numeroUtente = parseInt(prompt('Inserisci un numero'));
//   // console.log(isNaN(numeroUtente));
//
//   while (isNaN(numeroUtente)) {
//     numeroUtente = parseInt(prompt('Devi inserire un numero'));
//
//   }
//   if (numeroUtente % 2 != 0) {
//     arrayVuoto.push(numeroUtente);
//     console.log(numeroUtente);
//   }
// }
// console.log(arrayVuoto);

// ***************************************************************************

// CICLO WHILE

var arrayVuoto = [];
var i = 0;
while (i < 6) {
  var numeroUtente = parseInt(prompt('Inserisci un numero'));
  if (numeroUtente % 2 != 0) {
    arrayVuoto.push(numeroUtente);
    console.log(numeroUtente);
  }
  i++;
}
console.log(arrayVuoto);
