// // 1. Napraviti novu recenicu koja ce imati isti tekst, ali bez razmaka.

// const recenica = prompt("Unesite neku recenicu:");
// let recenica2 = "";
// for (let i = 0; i < recenica.length; i++) {
//   if (recenica[i] === " ") {
//     continue;
//   } else {
//     recenica2 += recenica[i];
//   }
// }
// console.log(recenica2);

// // 2. Napraviti novu recenicu gde ce umesto slova "a" pisati "t".
// // Dok ako se posle slova "a" nalazi slovo "n" pisace "d" umesto "a".

// const recenica1 = prompt("Unesite neku recenicu:");
// let recenica2 = "";

// for (let i = 0; i < recenica1.length; i++) {
//   if (recenica1[i] === "a" && recenica1[i + 1] === "n") {
//     recenica2 += "d";
//   } else if (recenica1[i] === "a") {
//     recenica2 += "t";
//   } else {
//     recenica2 += recenica1[i];
//   }
// }
// console.log(recenica2);

//  3. Na osnovu date recenice napraviti i ispisati novu recenicu tako da:

// (i)	se svi samoglasnici pretvore u velika slova;
// (ii)	ostali karakteri se ne menjaju.
const recenica3 = prompt("Unesite neku recenicu:");
let recenica4 = "";

for (let i = 0; i < recenica3.length; i++) {
  if (
    recenica3[i] === "a" ||
    recenica3[i] === "e" ||
    recenica3[i] === "i" ||
    recenica3[i] === "o" ||
    recenica3[i] === "u"
  ) {
    recenica4 += recenica3[i].toUpperCase();
  } else {
    recenica4 += recenica3[i];
  }
}
console.log(recenica4);

let j = 0;
for (j; j <= 50; j += 5) {
  console.log(j);
}
