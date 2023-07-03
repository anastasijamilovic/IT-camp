// Domaci:
// 1. Napraviti funkciju koja pravi novi niz, koji ce sadrzati samo elemente koji su se nalazili na parnim mestima unutar originalnog niza.
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// [2,4,6,8,10,12,14]
// 2. Iz nekog niza izdvojiti sve parne brojeve.(Napraviti novi niz)
// 3. Iz nekog niza izdvojiti sve neparne brojeve.(Napraviti novi niz)
// 4. Iz nekog niza izdvojiti sve pozitivne brojeve.(Napraviti novi niz)

// 5. Za datog niza izvrsiti:
// Sortiranje niza od najveceg ka najmanjem broju,
// Sortiranje niza od najmanjeg ka najvecem broju.

// 6. Write a simple JavaScript program to join all elements of the following array into a string where is * between elements.

// 1.
function noviParniNiz(niz) {
  let noviNiz = [];
  for (let i = 0; i < niz.length; i++) {
    if (i % 2 === 1) {
      noviNiz.push(niz[i]);
    }
  }
  return noviNiz;
}
let originalniNiz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let mojNiz = noviParniNiz(originalniNiz);
console.log(mojNiz);

// 2.
function izdvojiParneBrojeve(niz) {
  let parniBrojevi = [];
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 === 0) {
      parniBrojevi.push(niz[i]);
    }
  }
  return parniBrojevi;
}
let orgNiz = [1, 15, 23, 55, 26, 2, 18, 14, 97, 84];
let parniBrojevi = izdvojiParneBrojeve(orgNiz);
console.log(parniBrojevi);

// 3.
function izdvojiNeparneBrojeve(niz) {
  return niz.filter((element) => element % 2 === 1);
}
let orNiz = [1, 15, 23, 55, 26, 2, 18, 14, 97, 84];
let neparniBrojevi = izdvojiNeparneBrojeve(orNiz);
console.log(neparniBrojevi);

// 5.
const niz = [15, 34, 78, 94, 52, 64];
const odNjavecegDoNajmanjeg = niz.sort((a, b) => b - a);
console.log(odNjavecegDoNajmanjeg);

const arr = [15, 34, 78, 94, 52, 64];
const odNajmanjegDoNajveceg = niz.sort((a, b) => a - b);
console.log(odNajmanjegDoNajveceg);
