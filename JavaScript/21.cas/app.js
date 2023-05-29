console.log("a" > "b");
console.log("a" > "A");
// Prvo idu velika slova, pa onda mala
console.log("A".charCodeAt(0));
console.log("Z".charCodeAt(0));
console.log("a".charCodeAt(0));
console.log("z".charCodeAt(0));

let a = 4;

var b = 7;

const c = 9;
/* Cesto u literaciji cemo naici na tvrdnju da je JavaScript interpreterski jezik, ali to nije bas tako. 
U pozadini postoji JS masina koja vrsi pozadinsko kompajliranje pre izvrsavanja koda.
Stoga nije pogresno reci da je JS kompajliran jezik.

Pojam hoisting u JS predstavlja izvlacenje svih deklaracija na vrhu skripte (fajla).
 */

d = 11;

console.log(d);

/*Kasnije deklarisanje neke promenljive je moguce preko var keyword, dok preko let i const nije dozvoljeno. */
var d;

// let d;
// const d;

/* Ispitati da li u unetom stringu ima vise malih ili velikih slova. 
Slova koja se koriste u stringu pripadaju iskljucivo engleskoj abecedi.
 */
function kojihJeVise(string) {
  let brojacMalihSlova = 0;
  let brojVelikihSlova = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] >= "a" && string[i] <= "z") {
      brojacMalihSlova++;
    } else if (string[i] >= "A" && string[i] <= "Z") {
      brojVelikihSlova++;
    }
  }
  if (brojVelikihSlova > brojacMalihSlova) {
    return `U datoj recenici ima vise velikih slova. Ima ih ${brojVelikihSlova}, dok malih ima ${brojacMalihSlova}.`;
  } else if (brojacMalihSlova > brojVelikihSlova) {
    return `U datoj recenici ima vise malih slova. Ima ih ${brojacMalihSlova}, dok velikih ima ${brojVelikihSlova}.`;
  } else {
    return `Dati string ima jednak broj velikih i malih slova, ${brojacMalihSlova}.`;
  }
}
console.log(kojihJeVise("Treba imati VISE malih SLova."));
console.log(kojihJeVise("TREBA IMATI VISE velikih SLova."));
console.log(kojihJeVise("mala i VELIKA s"));
