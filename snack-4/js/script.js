// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

// CICLO FOR

// var listaInvitati = ['Matteo', 'Giovanni', 'Paolo', 'Luca', 'Marco', 'Alessandro'];
//
// var nomeUtente = prompt('Come ti chiami?');
// var invito = false;
//
// for (var i = 0; i < listaInvitati.length; i++) {
//   if (nomeUtente == listaInvitati[i]) {
//     invito = true;
//   }
// }
//
// if (invito == true) {
//   console.log('Puoi entrare');
// } else {
//   console.log('Non puoi entrare');
// }

// *************************************************************************

// CICLO WHILE

var listaInvitati = ['Matteo', 'Giovanni', 'Paolo', 'Luca', 'Marco', 'Alessandro'];

var nomeUtente = prompt('Come ti chiami?');
var invito = false;
var i = 0;

while (i < listaInvitati.length) {
  if (nomeUtente == listaInvitati[i]) {
  invito = true;
  // console.log(invito);
}
i++;
}

if (invito == true) {
  console.log('Puoi entrare');
} else {
  console.log('Non puoi entrare');
}
