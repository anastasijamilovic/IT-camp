// 1. Napraviti novu recenicu koja ce imati isti tekst, ali bez razmaka.

const recenica = prompt("Unesite neku recenicu:");
let recenica2 = "";
for (let i = 0; i < recenica.length; i++) {
  if (recenica[i] === " ") {
    continue;
  } else {
    recenica2 += recenica[i];
  }
}
