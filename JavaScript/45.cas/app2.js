const radnik = {
  firstName: "Anastasija",
  lastName: "Milovic",
  fullname: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  adresa: {
    ulica: "Stevana Nemanje",
    broj: "74",
    grad: "Novi Pazar",
    getAdress: function () {
      return `${radnik.firstName} ${radnik.lastName} zivi u ulici ${this.ulica} u ${this.grad}`;
    },
  },
};
// Vraca Anastasija Milovic zivi u ulici Stevana Nemanje u Novom Pazaru
console.log(radnik.fullname());
console.log(radnik.adresa.getAdress());

const godine = [
  { starost: 17 },
  { starost: 17 },
  { starost: 22 },
  { starost: 27 },
  { starost: 22 },
  { starost: 19 },
];
/* Napraviti novi niz (punoletni)  koji ce sadrzati one elemente (objekte) cija je starost veca od 17*/

const punoletni = godine.filter((coek) => coek.starost > 17);
console.log(punoletni);

/* Samo brojeve odvojiti */
const brojevi = godine.map((coek) => coek.starost);
console.log(brojevi);

/* ... (spread) operator 
Spread operator nam sluzi za kloniranje niza ili objekta
*/

const punoletni3 = [20, ...brojevi, 30];
console.log(punoletni3);

const radnik2 = {
  ...radnik,
  firstName: "Meryem",
  lastName: "Sinanovic",
};
console.log(radnik2);
