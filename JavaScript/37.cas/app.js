/* map() metoda kreira novi niz, na nacin da se callback funkcija (argument map metode) izvrsava za svaki element.
Duzina novodobijenog niza je jednaka duzini originalnog niza.
map() metoda ne menja originalni niz, vec pravi novi.
*/

const brojevi = [2, 4, 6, 8, 10, 12];

const brojevi2 = brojevi.map(function (broj) {
  return broj;
});
console.log(brojevi2);

/* 1. Napraviti brojevi3 koji ce sadrzati kvadrate elemenata niza brojevi */

const brojevi3 = brojevi.map((broj) => broj * broj);
console.log(brojevi3);

const studenti = [
  "asija",
  "ajla",
  "selver",
  "nedim",
  "ajsa",
  "emir",
  "merjem",
  "anastasija",
];
/* Preko map() metode napraviti novi niz gde ce imena svih studenata pocinjati velikim slovom. */
const studenti2 = studenti.map(
  (student) => student[0].toUpperCase() + student.slice(1)
);
console.log(studenti2);

/* Napraviti novi niz koji ce sadrzati samo prva tri elementa postojeceg niza. */
const studenti3 = studenti.map(function (student, pozicija) {
  if (pozicija < 3) {
    return student;
  }
});
console.log(studenti3);
/* Ako zelimo da iskljucimo neke elemente onda ce se na tim pozicijama dobiti undefined. */

/* Napraviti novi niz mapirajuci niz brojevi, koji ce imati sve elemente iste, dok elementi na pozicijama
0,3,5 ce biti kvadrirani. */

const noviNiz = brojevi.map((broj, indeks) => {
  if (indeks === 0 || indeks === 3 || indeks === 5) {
    return broj * broj;
  } else {
    return broj;
  }
});
console.log(noviNiz);

const numbers = [2, 7, 5, 7, 17, 28, 34, 55];
/* Npraviti novi niz koji sadrzi kvadrate parnih elemenata postojeceg niza. Dok za neparne elemente treba 
vratiti aritmeticku vrednost prethodnog elementa, datog i narednog. */

const numbers2 = numbers.map((num, index, arr) => {
  if (num % 2 === 0) {
    return num ** 2;
  } else {
    return +((arr[index - 1] + num + arr[index + 1]) / 3).toFixed(2);
  }
});
console.log(numbers);

// Domaci:
// 1. Pomocu map() metode napraviti novi niz stringova ciji ce elementi da budu
// ispisani velikim slovima.

// 2. Napraviti novi niz koji sadrzi element na kubni stepen postojeceg niza:

// 3. Napraviti novi niz koji sadrzi kvadratne korene elemenata postojeceg niza.

// 4.
// const brojevi = [-5, 4, 3, 10, 14, -5];
// Napraviti novi niz koji ce sve negativne brojeve pomnoziti sa (-1), a pozitivne kvadrirati.

// 1.
const prviNiz = ["krofna", "kucica", "automobil"];
const mojNiz = prviNiz.map((element) => element.toUpperCase());

console.log(mojNiz);

// 4.
const brojevi5 = [-5, 4, 3, 10, 14, -5];
const naredniNiz = brojevi5.map((element) =>
  element < 0 ? element * -1 : element ** 2
);
console.log(naredniNiz);

// 2.
const br3 = brojevi.map((element) => element ** 3);
console.log(br3);
