// JavaScript Globalne metode //

/* Globalne metode mozemo primeniti na bilo koji tip podataka: */

/* Pomenucemo najpoznatije globalne metode:

1. Number()
2. parseFloat()
3. parseInt()

1. Number() - metoda vraca broj dobijen konvertovanjem argumenata.*/

console.log(Number("string")); // NaN

console.log(Number("34")); // 34

console.log(Number("  34 ")); // 34 - Brise razmake sa strana i prevodi sring u broj
console.log(Number("34 43")); // NaN - Razmaci nisu dozvoljeni

console.log(Number(true)); // 1
console.log(Number(false)); // 0

console.log(Number([1, 2])); // NaN

console.log(Number([])); // 0
console.log(Number({})); // NaN

/* 2. parseFloat() - metoda nam vraca realan broj (sa decimalnim zapisom) dobijen konvertovanjem argumenata */

console.log(parseFloat("string")); // NaN

console.log(parseFloat("34")); // 34

console.log(parseFloat("  34 ")); // 34 - Brise razmake sa strana i prevodi sring u broj
console.log(parseFloat("34.456")); // 34.456
console.log(parseFloat("34 34")); // 34 - Razmaci su dozvoljeni. Parsira se samo prva vrednost.
console.log(parseFloat("3tyugj4 34")); // 3 - Razmaci su dozvoljeni. Parsira se samo prva vrednost.
console.log(parseFloat("ASH3tyugj4 34")); // NaN

console.log(parseFloat(true)); // NaN
console.log(parseFloat(false)); // NaN

console.log(parseFloat([1, 2])); // 1 -Parsira vrednost prvog elementa niza

console.log(parseFloat([])); // NaN
console.log(parseFloat({})); // NaN

/* parseInt() - metoda nam vraca realan broj (ceo) dobijen konvertovanjem argumenata  */

console.log(parseFloat("string")); // NaN

console.log(parseInt("34")); // 34

console.log(parseInt("  34 ")); // 34 - Brise razmake sa strana i prevodi sring u broj
console.log(parseInt("34.456")); // 34
console.log(parseInt("34.856")); // 34
console.log(parseInt("34 34")); // 34 - Razmaci su dozvoljeni. Parsira se samo prva vrednost.
console.log(parseInt("3tyugj4 34")); // 3 - Razmaci su dozvoljeni. Parsira se samo prva vrednost.
console.log(parseInt("ASH3tyugj4 34")); // NaN

console.log(parseInt(true)); // NaN
console.log(parseInt(false)); // NaN

console.log(parseInt([1, 2])); // 1 -Parsira vrednost prvog elementa niza

console.log(parseInt([])); // NaN
console.log(parseInt({})); // NaN

// Napraviti funkciju koja pretvara km u m

const kmToM = (km) => {
  return km * 1000;
};
console.log(kmToM(1.5));

// Naparviti funkciju koja pretvara inch u cm

//3. Napraviti funkciju koja ocekuje trocifren broj, a vraca dvocifren (iskljuci cifru desetice).

function vratiBroj(broj) {
  if (!isNaN(broj) && broj >= 100 && broj <= 999) {
    const stotina = Math.floor(broj / 100);
    const jedinica = broj % 10;
    const noviBroj = Number(`${stotina}${jedinica}`);
  } else {
    return "Argument nije trazeni broj iz opsega.";
  }
}
console.log(vratiBroj(123));
console.log(vratiBroj(976));
