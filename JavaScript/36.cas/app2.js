/* JavaScript Array iteration metode 
Array Iterator metode prolaze kroz svaki element niza.

forEach() metoda poziva callback funkciju (koja predstavlja argument forEach() metode 
jednom za svaki element niza) 
*/

const brojevi = [2, 4, 6, 8, 10, 12];

brojevi.forEach((element, index, array) => {
  //   console.log(index, element, array);
  console.log(element);
});

/* callback funkcija moze imati 3 argumenta:
1. vrednost elementa;
2. index (pozicija) elementa;
3. ceo niz na koji se primenjuje metoda;
*/

/* Preko petlje napraviti novi niz koji ce imati sve elemente originalnog niza. */

let orgNiz = [25, 15, 36, 84];
let noviNiz = [];
for (let i = 0; i < orgNiz.length; i++) {
  noviNiz.push(orgNiz[i]);
}

console.log(noviNiz);

/* bez petlje: */

const brojevi2 = [];
brojevi.forEach((element) => {
  brojevi2.push(element);
});
console.log(brojevi2);
