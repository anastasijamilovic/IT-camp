/* Date Objects */

/* Kreiranje datuma: */
/* U JavaScriptu datume kreiramo preko
new Date
konstruktora.
 */

/* Postoje 4 nacina za kreiranje Date objekta: */

/* 1. new Date() */
console.log(new Date()); //Dobili smo trenutni datum, vreme
console.log(typeof new Date());

/* 2. new Date(year, month, day, hours, minutes, seconds, milliseconds) */
console.log(new Date(2020, 1, 23, 17, 17, 17, 17));
/* Napomena: Meseci se racunacju od 0 do 11 */

/* Mozemo poslati, 7,6,5,4,3,2 argumenta ako zelimo da dobijemo datum prema nasoj zelji. */
console.log(new Date(2003, 5));

/* 3. new Date(milliseconds) */

console.log(new Date(6452));
/* Nulto vreme u JavaScriptu je 1.1.1970. */

/* JavaScript skladisti datume kao broj milisekundi od 1.1.1970. */

/* Ako prvi argument bude jednocifren ili dvocifren broj to znaci da se posmatra prethodni vek,
 (odnosno dodaje se 19..) */

console.log(new Date(22, 8, 12));

/* 4. new Date(string)  */
console.log(new Date("2022-03-25"));

/* Display dates metode: */
/* Postoji nekoliko razlicitih metoda za prikazivanje datuma u razlicitim formatima: */

const date = new Date();

/* 1. toString() */
console.log(date.toString());

/* 2. toUTCString() */
console.log(date.toUTCString());

/* 3. toDateString() */
console.log(date.toDateString());

/* 4. toISOString() */
console.log(date.toISOString);

/* 5. Date.parse() - vraca broj milisekundi izmedju 1.1.1970. i poslatog datuma. */

console.log(Date.parse(new Date()));

const anastasija = new Date(2005, 9, 25);
const ajsa = new Date(2005, 1, 7);

const brMsAjsa = Date.parse(ajsa);
const brMsAnastasija = Date.parse(anastasija);
console.log(brMsAjsa);
console.log(brMsAnastasija);
const razlika = brMsAnastasija - brMsAjsa;
// const razlikaDatum = new Date(razlika)
// console.log(razlikaDatum)
const dana = razlika / 1000 / 60 / 60 / 24;
console.log(dana);

/* Napraviti fukciju koja racuna razliku u danima izmedju sledeca dva datuma:
1999- */

/* 8. getTime() */
console.log(date.getTime());

/* 9. getDay() */
console.log(date.getDay()); /* Vraca vrednost izmedju 0 i 6 (dani u nedelji) 
0 = nedelja
6 = subota
 */

/* 10. Date.now() */
console.log(
  Date.now()
); /* Broj milisekundi od 1.1.1970. do trenutnog vremena */

/* JavaScript SET metode za datume: */

/* Sledece metode mozemo iskoristiti za setovanje odredjenih informacija vezano za neki datum: */

/* 1. setFullYear() */

const updateDate = date.setFullYear(1999);
console.log(new Date(updateDate));

/* 2. setMonth() */
const updateDate2 = date.setMonth(9);
console.log(new Date(updateDate2));

/* 4. setDate() */

/* 5. setHours() */

/* 6. setMinutes() */

/* 7. setSeconds() */

/* 8. setMilliseconds() */

//Boolean

console.log(7 === 77);
console.log(typeof (7 === 77));

console.log(Boolean(7 === 77));
console.log(typeof Boolean(7 === 77));

console.log(5);
console.log(Boolean(5));

/* VREDNOSNI I REFERENTNI TIPOVI PODATAKA 
(OSNOVNI I SLOZENI)
(PRIMITIVNI I NEPRIMITIVNI)
*/

/* Primer vrednosnog tipa podatka: */

let rec = "danas";
let drugaRec = rec;

console.log(rec);
console.log(drugaRec);

drugaRec += " je bilo prelepo vreme";
console.log(drugaRec);
console.log(rec);

/* Primer referentnog tipa podatka: */

const niz = [1, 2, 3];
console.log(niz);
const drugiNiz = niz;
console.log(drugiNiz);

drugiNiz.pop();
console.log(drugiNiz);
console.log(niz);

/* Write a JavaScript function to get the number of days in a month */

// 1. primer
function daniUMesece(month, year) {
  return new Date(year, month, 0).getDate();
}
const month = 2;
const year = 2012;
const pretvaranje = daniUMesece(month, year);

console.log(pretvaranje);

// 2.primer

const getDaysInMonth = (month, year) => {
  const date = new Date(year, month, 0, 22, 22, 22).getDate();
  return date;
};

//saljemo godinu, mesec
console.log(new Date(2023, 0, 0, 22, 22, 22));

console.log(getDaysInMonth(1, 2012));
console.log(getDaysInMonth(2, 2012));
console.log(getDaysInMonth(9, 2012));
console.log(getDaysInMonth(12, 2012));

/* Write a JavaScript function to get the month name from a particular date. */

("2023-05-22");

function dodajImeMeseca(date) {
  const imenaMeseca = [
    "Januar",
    "Februar",
    "Mart",
    "April",
    "Maj",
    "Jun",
    "Jul",
    "Avgust",
    "Septembar",
    "Oktobar",
    "Novembar",
    "Decembar",
  ];
  const imeMeseca = date.getMonth();
  return imenaMeseca[imeMeseca];
}
const myDate = new Date("2023-05-22");
const imeM = dodajImeMeseca(myDate);
console.log(imeM);
