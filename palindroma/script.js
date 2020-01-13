// 1__Scrivi una funzione per capire se la parola è palindroma
// 2__Gioco Pari e dispari:
// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).
// Partiamo sempre dallo scomporre il problema in piccole parti, scriviamo prima in italiano e poi in js.
// Per quanto riguiarda la Palindroma, scriviamo prima il codice come siamo abituati a fare e poi lo inseriamo in una funzione.
// Per il secondo esercizio stessa cosa facciamo funzionare tutto e se possibile poi facciamo un restyling con le funzioni.

// 1__Scrivi una funzione per capire se la parola è palindroma
var parolaUtente = prompt("Inserisci una parola");
var parolaGirata = roveciaParola(parolaUtente);

if (parolaUtente == parolaGirata) {
 console.log("La parola è palindroma");
}

else {
  console.log("La parola non è palindroma");
}
function roveciaParola(parola) {
 var parolaRovesciata = "";
 for (var i = parola.length -1; i >= 0; i--) {
   parolaRovesciata += parola[i]
 }
 return parolaRovesciata;
}



// Soluzione con le funzioni (split, reverse, join)
// var controllo = palindroma(parola);
// console.log(controllo);
//
// function palindroma() {
//   var risultato = parola.split("").reverse().join("");
//
//   if (parola == risultato) {
//     return parola + " è palindroma";
//   }
//
//   else {
//     return parola + " non è palindroma";
//   }
// }









// 2__Gioco Pari e dispari:
// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).

// var parioDispari = prompt("Scrivi pari o dispari");
// var sceltaNumerogiocatore = parseInt(prompt("scrivi un numero da 1 a 5"));
// var sceltaNumeroComputer = getRandomIntInclusive(1,5);
// var numero = console.log(sceltaNumeroComputer);
// var sommaNumeri = sceltaNumerogiocatore + sceltaNumeroComputer;
//
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// if (sommaNumeri % 2 == 0) {
//   console.log(sommaNumeri + " è pari");
// }
// else {
//   console.log(sommaNumeri + " è dispari");
// }
