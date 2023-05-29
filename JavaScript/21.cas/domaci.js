// Domaci zadaci:
// 1.	Sva velika slova u stringu treba svesti na mala slova. Npr. za uneto 'WEBnSTUDY.com', dobija se novi string 'webnstudy.com'. Slova koja se koriste u stringu pripadaju isključivo engleskoj abecedi.

let i = "WEBnSTUDY.com";
let novi_string = i.toLowerCase();
console.log(novi_string);

// 2.	Pronaći poziciju poslednjeg razmaka u stringu. Npr. za uneto 'Pera ima devojku', rezultat je 8.

let string = "Pera ima devojku";
let pozicija = string.lastIndexOf(" ");
console.log(pozicija);

// 3.	Ispisati dužinu prve reči unetog stringa. Npr. za uneto 'Pera ima devojku', rezultat je 4. Podrazumeva se da uneti string nema vodeće razmake.
let d = "Pera ima devojku";
let prva_reč = d.split(" ")[0];
let dužina = prva_reč.length;
console.log(dužina);

const third = (recenica) => {
  const prviRazmak = recenica.indexOf(" ");
  const prvaRec = recenica.slice(0, prviRazmak);
  const duzina = prvaRec.length;
  return duzina;
};
