//domando il numero di kilometri da percorrere
var kilometri = prompt("inserisci i kilometri da percorrere");
//domando l'età
var eta = prompt("inserisci la tua età");
//definisco il prezzo al kilometro
var prezzokm = kilometri * 0.21;
//definisco i sconti
console.log(kilometri);
console.log(eta);
console.log(kilometri * prezzokm);
var sconto = 0;
if (eta < 18) {
  sconto = 20;
}
else if (eta >= 65) {
  sconto = 40;
}
else {
sconto = 0;
}

var totsconto = prezzokm * sconto / 100;
console.log(totsconto);
var prezzoFinale = prezzokm - totsconto;

document.getElementById('risultato').innerHTML = prezzoFinale +"$"
