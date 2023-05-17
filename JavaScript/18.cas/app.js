//  Za ekstraktovanje (uzimanje jednog karaktera) mozemo iskoristiti jedan od 3 nacina:

/* charAt(index) metoda uzima jedan argument (argument prestavlja index) i vraca nam karakter koji zauzima tu
 poziciju.
 charCodeAt(index) metoda uzima jedan argument (argument prestavlja index) i vraca nam kod karaktera koji zauzima 
 tu poziciju.
 string[index] nacin pristupa nekom karakteru iz stringa.
 */

let recenica = "Recenica za uzimanje karaktera.";

console.log(recenica.charAt(4));
console.log(recenica.charCodeAt(4));
console.log(recenica[4]);

console.log(
  recenica.charAt(100)
); /* rezultat karaktera koji ne postoji daje " " */
console.log(
  recenica[100]
); /* rezultat karaktera koji ne postoji daje undefined*/

// Za ekstraktovanje dela karaktera mozemo iskoristiti jednu od 3 metode:

/* slice() metoda nam vraca deo stringa. On ima 2 argumneta, prvi argumnet je pocetni index za uzimanje isecka, 
drugi argument je index do kojeg idemo. 
Drugi argument se ne ukljucuje! 
Drugi argument nije obavezan. Ako ga izostavimo dobicemo string od prvog argumenta do kraja.
slice() metoda omogucava koriscenje negativnih indexa.
*/

console.log(recenica.slice(12, 20));
console.log(recenica.slice(12));
console.log(recenica.slice(-10, -1));

/* substring() metoda nam vraca deo stringa. On ima 2 argumneta, prvi argumnet je pocetni index za uzimanje isecka, 
drugi argument je index do kojeg idemo. 
Ova metoda ne podrzava negativne indexe.
*/

console.log(recenica.substring(12, 20));
console.log(recenica.substring(12));

/* substr() metoda nam vraca deo stringa. On ima 2 argumneta, prvi argumnet je pocetni index za uzimanje isecka, 
drugi argument je duzina tog isecka.
*/
console.log(recenica.substr(3, 10));

/* split() metoda nam sluzi da neki string pretvorimo u niz jednog ili vise elemenata.
 */

/* Ako split metodu primenimo na neki string bez da joj posljemo argument, dobicemo niz od samo jednog elementa
(cela recenica je taj element)
    */
console.log(recenica.split());

/*Slanje nekog argumenta znaci da taj argument predstavlja karakter gde ce se deliti elementi niza.
 */
console.log(recenica.split(" ")); /*Svaka rec predstavlja jedan element niza  */

console.log(
  recenica.split("")
); /*Svaki karakter predstavlja jedan element niza */

console.log(
  recenica.split("*")
); /*Dobili smo niz od jedne elementa (cela recenica) */

/* Zadatak: Izracunavanje duzine reci
Napisi funkciju koja prima jedan string kao argument i vraca broj karaktera u najduzoj reci
u tom stringu. Pretpostavi da su reci odvojene samo jednim razmakom.
Na primer, za ulazni string "Danas je divan dan." funkcija treba da vrati broj 5.
*/

function najduzaRec(string) {
  const nizReci = string.split(" ");
  let najduzaRec = nizReci[0];
  for (let i = 0; i < nizReci.length; i++) {
    if (nizReci[i].length > najduzaRec.length) {
      najduzaRec = nizReci[i];
    }
  }
  return najduzaRec;
}
console.log(najduzaRec(recenica));
