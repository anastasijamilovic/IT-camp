// Search metode:

const recenica = "danas je lep dan.";

/* indexOf() metoda nam vraca poziciju karaktera ili niza karaktera koje smo poslali kao argument.
Ako se argument nalazi vise puta unutar stringa, dobijamo poziciju prvog pojavljivanja tog argumenta.
Ako se argument ne nadje unutar stringa, rezultat ce biti -1.
*/

console.log(recenica.indexOf("d"));
console.log(recenica.indexOf("dan"));
console.log(recenica.indexOf("noc"));
console.log(recenica.indexOf("nas"));

/* lastIndexOf() metoda nam vraca poziciju poslednjeg pojavljivanja karaktera ili niza karaktera koje smo 
poslali kao argument.
Ako se argument ne nadje unutar stringa, rezultat ce biti -1.
 */

console.log(recenica.lastIndexOf("dan"));
console.log(recenica.lastIndexOf("lep"));
console.log(recenica.lastIndexOf("noc"));

/* Obe metode dozvoljavaju drugi argument koji oznacava poziciju od koje pocinje trazenje.
Napomena: Brojac se en resetuje, ako krenemo od drugog argumenta da trazimo, i brojanje ide od drugog argumenta.
 */

console.log(recenica.indexOf("dan", 6));
console.log(recenica.indexOf("danas", 6));

/* search() metoda takodje vraca poziciju trazenog stringa, s tim sto kod ove metode ne mozemo poslati
 drugi argument.
 Ako se argument ne nadje unutar stringa, rezultat ce biti -1.
 */

console.log(recenica.search("dan"));
console.log(recenica.search("noc"));

/* startsWith() metoda proverava da li neki string pocinje argumentom koji joj saljemo. Vraca boolean
 (true ili false).
Opciono mozemo poslati drugi argument koji ce da bude index od kojeg zelimo da trazimo poziciju nekog stringa.
 */

console.log(recenica.startsWith("Danas"));
console.log(recenica.startsWith("je", 6));

/* endsWith() metoda proverava da li neki string zavrsava argumentom koji joj saljemo. Vraca boolean 
(true ili false).
Opciono mozemo poslati drugi argument koji predstavlja ukupnu duzinu posmatranja datog stringa.
 */

console.log(recenica.endsWith("dan"));
console.log(recenica.endsWith("dan."));

console.log(recenica.endsWith("dan", 15)); // false
console.log(recenica.endsWith("dan", 16)); // true

/* Zadatak:
Napisi funkciju koja prima tri argumenta: originalni string, pocetni index i krajnji string. 
Funkcija treba da izdvoji podstring iz oruginalnog stringa koji se nalazi izmedju pocetnog i krajnjeg indexa
 (ukljucujuci oba indexa) i vrati taj podstring.
 Na primer, za ulazne vrednosti "Hello, World!, 7 i 11, funkcija treba da vrati "World".
 */

const deoStringa = (string, pocetak, kraj) => {
  //return string.slice(pocetak, kraj + 1); prvi nacin
  return string.substr(pocetak, kraj + 1 - pocetak); // drugi nacin
};
console.log(deoStringa("Hello, World!", 7, 11));

const deoStringa2 = (string, pocetak, kraj) => {
  let noviString = "";
  for (let i = pocetak; i <= kraj; i++) {
    noviString += string[i];
  }
  return noviString;
};
console.log(deoStringa2("Hello, World!", 7, 11));

// Domaci zadaci:
// 1. Prebrojavanje reči
// Napiši funkciju koja prima jedan string kao argument i vraća broj reči u tom stringu. Pretpostavi da su reči odvojene samo jednim razmakom. Na primer, za ulazni string "Ovo je primer." funkcija treba da vrati broj 3.

function brojReci(string) {
  return string.split(" ").length;
}
console.log(brojReci("Obrni okreni palacinke"));
console.log(brojReci("palacinke"));
// 2. Obrtanje stringa
// Napiši funkciju koja prima jedan string kao argument i vraća taj string u obrnutom redosledu. Na primer, za ulazni string "hello" funkcija treba da vrati "olleh".

const second = (string) => {
  let noviString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    noviString += string[i];
  }
  return noviString;
};
console.log(second("hello"));

// 3.	Prebrojati koliko ima znakova koji su cifre u unetom stringu.
let str = prompt("Unesi string");
let brojCifara = 0;
for (let i = 0; i < str.length; i++) {
  if (!isNaN(str) && str[I] !== " ") {
    brojCifara++;
  }
  return brojCifara;
}
console.log(str("Koliko ima cifara broj 256?"));
