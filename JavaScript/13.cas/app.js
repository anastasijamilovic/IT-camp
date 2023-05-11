// Traziti unos korisnickog imena sve dok korisnik ne unese ispravno korisnicko ime.
// (npr. duzina korisnickog imena mora biti najmanje 6 karaktera)

let username = "";
while (username.length < 6) {
  username = prompt("Unesite ispravan username:");
}

// DRY

// Funkcije predstavljaju deo koda koji ce se izvrsiti samo u slucaju njihovog pozivanja. Koristimo ih da bi nas kod bio reusable (isti kod resava vise problema slicnog tipa.)

// Funkciju mozemo napraviti na dva nacina:
// 1. Preko function keyword.
// 2. Arrow function.

// 1.
function myFunc() {
  // kod unutar funkcije
}

// 2.
const myFunc2 = () => {
  // kod unutar funkcije
};

// funkcija koja ispisuje zdravo
function greeting(parametar1, parametar2) {
  console.log("Zdravo");
}
greeting();

// Prilikom definisanja funkcije mozemo joj proslediti parametre koji su neophodni za izvrsavanje koda date funkcije.
// Dok prilikom pozivanja funkcije to sto saljemo funkciji se zovu argumenti.

function greeting2(ime) {
  console.log("Zdravo " + ime);
}
greeting2("Anastasija");

// Napraviti funkciju koja nam vraca zbir 3 i 5.
function zbirTriIPet() {
  const prom1 = 3;
  const prom2 = 5;
  //   Kada se izvrsi cela logika funkcije, krajnji rezultat treba vratiti u return keyword(rezervisanoj reci)
  return prom1 + prom2;
  //  Kod koji se nadje nakon return u function scope se nece primeniti.
}

function jedanIDva(br1, br2) {
  return br1 + br2;
}
console.log(jedanIDva(10, 5));

//Dodeljivanje defaultne vrednosti se moze izvrsiti na 2 nacina:

// 1.
function jedanIDva2(br1, br2) {
  if (br2 === undefined) {
    return br1;
  } else {
    return br1 + br2;
  }
}
console.log(jedanIDva2(34));

// 2. nacin
function zbirDvaBroja3(br1, br2 = 0) {
  return br1 + br2;
}

console.log(zbirDvaBroja3(15));
console.log(zbirDvaBroja3(15, 12));
