// concat() metoda nam sluzi za spajanje dva ili vise niza.

const muskarci = ["Emir", "Selver"];
const devojke = ["Asija", "Dzana", "Ajsa", "Anastasija"];

// const celaGrupa = muskarci.concat(devojke)

/* slice() metoda vraca deo niza (onoliko elemenata koliko smo trazili slanjem argumenata - indexa) */

console.log(celaGrupa.slice(0, 2));
console.log(celaGrupa.slice(-4, -1));
console.log(celaGrupa.slice(3));

/* splice() metoda se moze koristiti za dodavanje novih elemenata u nizu, brisanje i sve mozemo vrsiti
na zeljenim pozicijama unutar niza. */

console.log(celaGrupa);

celaGrupa.splice(2, 0, "Merjem");
console.log(novaGrupa);

/* Prvi argument metode predstavlja poziciju u nizu odakle zelimo promene.

Drugi argument metode predstavlja broj elemenata koji treba da se izbrisu, krenuvsi od pozicjije 
(prvog argumenta).

Svi sledeci argumenti predstavljaju nove elemente u nizu (vrednosti koje zelimo dodati na vec definisanoj poziciji.)
*/

/* Primenom splice metode izbrisati sve devojke, zatim ih dodati na pocetak niza. */

/* splice() metoda vraca niz sa izbrisanim elementima */
const devojke2 = celaGrupa.splice(2, 5);
console.log(celaGrupa);
const novaGrupa = devojke2.concat(celaGrupa);
console.log(novaGrupa);
novaGrupa.splice(5, 0, "Ajla");
console.log(novaGrupa);

novaGrupa.slice(5, 2, "Dzevdet", "Tarik", "Marija", "Alem");
console.log(novaGrupa);

novaGrupa.splice(-3, 1, "Melida");
console.log(novaGrupa);

/* sort() metoda vrsi sortiranje niza (abecedno)  */

// novaGrupa.sort();
console.log();

/* reverse() metoda sortira niz od poslednjeg ka prvom elementu. */

/* Za sortiranje niza od Z do A prvo treba iskoristiti sort() metodu, pa onda reverse() */
novaGrupa.sort();
novaGrupa.reverse();
console.log(novaGrupa);

const brojevi = [3, 4, 99, -99, 23, 32];
/* sortiranje niza brojeva samo po sebi se ne vrsi kako bismo mi zeleli: */
brojevi.sort();
console.log(brojevi);

/* Potrebno je poslati funkciju koja vrsi poredjenje dva broja kako bismo sortirali niz 
od najmanjeg ka najvecem elementu. */
brojevi.sort(function (a, b) {
  return a - b;
});
console.log(brojevi);

/* Potrebno je poslati funkciju koja vrsi poredjenje dva broja kako bismo sortirali niz 
od najveceg ka najmanjem elementu (obrnuto poredjenje). */
brojevi.sort(function (a, b) {
  return b - a;
});

// brojevi.sort((a, b) => b - a);

console.log(brojevi);

/* Sortiranje niza u random redosledu:  */
brojevi.sort(function () {
  return 0.5 - Math.random();
});
console.log(brojevi);

// 1. Napraviti funkciju koja vraca najveci element nekog niza.
// 2. Napraviti funkciju koja vraca najmanji element nekog niza.
// 3. Iz naseg niza grupa napraviti dva niza muskarci i devojke, s tim sto se Dzevdet, Marija, Melida i Tarik ne smeju naci.
// 4. Napraviti funkciju koja pravi novi niz, koji ce sadrzati samo elemente koji su se nalazili na neparnim mestima unutar originalnog niza.
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// [1,3,5,7,9,11,13]

// 1.
function najveciElement(niz) {
  let najveci = niz[0];
  for (let i = 1; i < niz.length; i++) {
    if (niz[i] > najveci) {
      najveci = niz[i];
    }
  }
  return najveci;
}
let noviNiz = [5, 2, 9, 1, 7];
let rezultat = najveciElement(noviNiz);
console.log(rezultat);

// 2.

function najmanjiElement(niz) {
  let najmanji = niz[0];
  for (let i = 1; i < niz.length; i++) {
    if (niz[i] < najmanji) {
      najmanji = niz[i];
    }
  }
  return najmanji;
}
let nizNajmanji = [5, 2, 9, 1, 7];
let ispis = najmanjiElement(nizNajmanji);
console.log(rezultat);
