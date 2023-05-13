const prom1 =
  "Sta ako zelimo da se data recenica ispise u \n dva odvojena reda";
console.log(prom1);

const prom2 =
  "Sta ako zelimo da se data recenica ispise u \n dva odvojena reda kada kucamo, \
  ali njen prikaz ce izgledati u jednom redu";
console.log(prom2);

/*const prom3 =
  "Sta ako zelimo da se data recenica ispise u \n dva odvojena reda kada kucamo, 
  ali njen prikaz ce izgledati u jednom redu";
console.log(prom3); */

let br1 = 7;
let br2 = 13;
//let zbir = br1 + br2;
console.log("Zbir brojeva" + 7 + "i" + 13 + "je" + (br1 + br2));

// Resenje preko back-ticks
console.log(`Zbir brojeva ${br1} i ${br2} je ${br1 + br2}`);

// Zapisivanje navodnika se vrsi bez ikakvih problema kroz back-ticks sintaksu.
// Zapisivanje stringa u vise redova je ispravna sintaksa kroz back-ticks navode.

let recenica = "Zelimo zameniti rec 'promenljivo' recju 'lepse'";

// replace() metoda menja specifican karakter (niz karaktera) nekim drugim (koji saljemo kroz drugi argument).
// To se postize pravljenjem novog stringa
// console.log(recenica.replace("promenljivo", "lepse"));
let recenica2 = recenica.replace("promenljivo", "lepse");
console.log(recenica);

let recenica3 =
  "Zelimo zameniti rec 'promenljivo' recju 'lepse'. Sta ako se rec promenljivo nadje na jos nekom mestu";

let recenica4 = recenica3.replace("promenljivo", "lepse");
console.log(recenica4);

/*replace() metoda menja samo prvi pronadjeni argument u datom string.
Medjutim, koriscenjem takozvanih regular expression mozemo zameniti dati argumet gde god da se
 nadje u string novim.
*/
// Sinataksa:

let recenica5 = recenica3.replace(/promenljivo/g, "lepse");
console.log(recenica5);

/*Regular Expression i (intensitive) menja rec drugom bez obzira na njen zapis (bilo da je ispisan velikim
     ili malim slovima)
*/

let recenica6 =
  "Zelimo zameniti rec 'PromenljivO' recju 'lepse'. Sta ako se rec promenljivo nadje na jos nekom mestu";

let recenica7 = recenica6.replace(/promenljivo/g, "lepse");
console.log(recenica7);

// toUpperCase() metoda pretvara ceo string u velika slova, bez obzira a to kako je prethodno ispisan i koliko ima karatera.

console.log("Data recenica treba biti ispisana velikim slovima".toUpperCase());

// concat() metoda spaja dva ili vise stringova u jedan.
/* Nismo ograniceni slanjem argumenata.
Dodavanje se vrsi onim redosledom kako saljemo argumente.
*/

let a = "Prvi deo ";
let b = "nase recenice";
let b2 = ".";
let c = a.concat(b, b2);
console.log(c);

// Sve metode za stringove prave novi string, ne vrsi se modifikacija postojeceg.

/*1.
Napraviti funkciju koja kod stringa koji predstavlja argument funkcije ispituje sledece:
Ako dati string ima vecu duzinu od 9:
pravi novi string gde menjamo sva mala slova "a" sa "B" i funcija ce vratiti novi string koji je sastavljen od
"Ovo je novodobijena recenica, " + novaRecenica 
Ako string ima duzinu <= 9:
Funkcija treba vratiti poruku:
Recenica je nedovoljne duzine za dalje ispitivanje.
*/
function myFunc(recenica) {
  const duzina = recenica.length;
  if (duzina < 9) {
    const novaRecenica = recenica.replace(/a/g, "B");
    return "Ovo je novodobijena recenica ".concat(novaRecenica);
  } else {
    return "Recenica je nedovoljne duzine za dalje ispitivanje.";
  }
}
console.log(myFunc("Recenica za modifikaciju."));
console.log(myFunc("Nije doa"));
