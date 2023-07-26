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

// Domaci:
const automobil = {
  marka: "Audi",
  model: "Q7",
  boja: "Bela",
  pogon: "quattro",
  menjac: "Automatik",
  km: 240000,
  vlasnik: ["062321552", "063930630"],
  garaza: {
    parking: "JKP Servis",
    vikend: "od 17h free",
    satnaKarta: "50",
    dnevnaKarta: "200",
    mesecnaKarta: "2000",
    platiZa: function (date1, date2) {
      const dan = 24 * 60 * 60 * 1000;
      const odKada = new Date(date1);
      const doKada = new Date(date2);
      const dani = Math.round((doKada - odKada) / dan);
      const sve = automobil.garaza.dnevnaKarta * dani;
      return sve;
    },
  },
};

const odKada = "1999-11-03";
const doKada = "2005-02-25";
const racun = automobil.garaza.platiZa(odKada, doKada);
console.log("Racun za parking je", racun);
//  2. Write a JavaScript program to sort an array of JavaScript objects:

const library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];
// 1. nacin
// library.sort((a, b) => a.title.localeCompare(b.title));
// console.log(library);

// 2. nacin
const sortByTitle = (arr) => {
  const titleArr = arr.map((el) => el.title);
  titleArr.sort();

  const library2 = [];
  titleArr.forEach((title) => {
    const element = arr.find((obj) => obj.title === title);
    library2.push(element);
  });
  return library2;
};

console.log(sortByTitle(library));
