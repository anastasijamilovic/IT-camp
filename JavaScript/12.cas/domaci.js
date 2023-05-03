// Domaci zadatak.
// 1. Ispisati novu recenicu gde ce svaka rec zavrsavati velikim slovom.

let recenica = "na kraj sela zuta kuca";
let recenica2 = "";
let length = recenica.length;
for (let i = 0; i < length; i++) {
  if (i === length - 1) {
    recenica2 += recenica[i].toUpperCase();
  } else if (recenica[i + 1] === " ") {
    recenica2 += recenica[i].toUpperCase();
  } else {
    recenica2 += recenica[i];
  }
}
console.log(recenica2);

// 2.	Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" (i veliko i malo).
// Npr. za string 'Mama ima momu', dobija se rezultat 5.

const rec = "Mama ima momu";
let slovoM = 0;
for (let i = 0; i < rec.length; i++) {
  if (rec[i] === "M" || rec[i] === "m") {
    slovoM++;
  }
}
console.log(slovoM);
