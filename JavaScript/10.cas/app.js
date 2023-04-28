// Zadatak: Fudbalski teren
// Fudbalski teren dimenzija dxs treba ograditi pravougaonom ogradom tako da je rastojanje stranica ograde
// od linija terena r. napisi program koji odredjuje duzinu ograde.
// Ulaz: U tri reda standardnog ulaza nalaze se tri cela broja:
// ~ d - duzina terena u metrima (90 <= d <= 120)
// ~ s - sirina terena u metrima (45 <= s <= 90)
// ~ r -rastojanje ograde od terena u metrima (2 <= r <= 10)

const d = +prompt("Unesite duzinu terena");
const s = +prompt("Unesite sirinu terena");
const r = +prompt("Unesite rastojanje terena");

const duzinaograde = 2 * d + 2 * s + 8 * r;
console.log("Treba nam" + duzinaograde + "metara za ogradjovanje terena");

let(90 <= d && d <= 120);

// Osnove o stringiovima:
const recenice = "Necemo matematicke zadatke!";
console.log(recenica);
// Pristupanje nekom karakteru ide preko indexa!
// Indexiranje ide od 0.
// Poslednji karakter u stringu ima index (cela duzina stringa -1.)
console.log(recenica[0]);
console.log(recenica[7]);
// Za izracunavanje duzine nekog stringa se koristi lenght metoda:
const duzina = recenica.lenght;
console.log(duzina);
// Ispisivanje poslednjeg karaktera datog stringa:
console.log(recenica)[duzina - 1];

// Domaci zadatak:
// 1. Zavrsiti zadatak za racunanje duzine ograde fudbalskog terena
