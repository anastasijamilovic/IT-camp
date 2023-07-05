const godine = [17, 17, 21, 27, 19];
/* 1. Napraviti novi niz koji ce sadrzti samo godine vece od 17. */

const veceOd17 = [];
godine.forEach((godina) => {
  //   if (godina > 17) {
  //     veceOd17.push(godina);
  //   }
  godina > 17 && veceOd17.push(godina);
});
console.log(veceOd17);

/* filter() metoda pravi novi niz sa onim elementima koji su prosli test. 
Novi niz moze biti prazan, iste duzine kao originalni ili imati manje elemenata od originalnog niza. Zavisi od
toga koliko je elemenata proslo test.
*/
/* callback funkcija vraca uslov koji neki element treba da zadovoljava kako bi prosao test
 (kako bi bio dodat u novi niz) */
const godine3 = godine.filter((godina) => godina > 17);
console.log(godine3);

/* 2.
Prvi deo. Napraviti pomocni niz koji ce sadrzati elemente od oba niza.
Drugi deo. Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog niza uzeti parne brojeve.
Treci deo. U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
Funkcija na kraju treba da vrati dva napravljena pomocna niza.*/

function helpers(arr1, arr2) {
  const helper1 = arr1.concat(arr2);
  const helper2 = helper1.filter((num) => num % 2 === 0);
  helper2.unshift(10, 20);
  return `First helper: ${helper1} \n
  second helper: ${helper2}`;
}
console.log(helpers([1, 2, 3, 4, 5], [6, 7, 8, 9]));

const students = [
  "Anastasija",
  "Merjem",
  "Elvir",
  "Nedim",
  "Selver",
  "Ajla",
  "Asija",
];
/*Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elementima starog niza gde je drugo slovo "e"*/

// const students2 = students.filter((student) => {
//   if (student[1] === "e") {
//     return student;
//   }
// });
// console.log(students2);

const students2 = students.filter((student) => student[1] === "e");
console.log(students2);

/* reduce() metoda izvrsava callback funkciju za svaki element jedom i vraca nam jednu vrednost. 
reduce() metoda se izvrsava sa leve na desnu stranu.
callback funkcija reduce metode moze imati 4 argumenta:
(previousValue, currentValue, index, array)
*/

// const godine = [17, 17, 21, 27, 19];
const suma = godine.reduce((prev, curr) => prev + curr);
console.log(suma);

/* Mozemo dodati pocetnu vrednost, ona predstavlja drugi parametar callback funkcije. */
const suma2 = godine.reduce((prev, curr) => prev + curr, 100);
console.log(suma);
