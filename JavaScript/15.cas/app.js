const isSunny = true;

if (isSunny) {
  console.log("Napolju je suncano.");
} else {
  console.log("Napolju nije suncano.");
}

// Postoji 8 FALSY vrednosti, to su:

// 1. false
// 2. ""
// 3. 0
// 4. -0
// 5. 0n
// 6. NaN
// 7. undefined
// 8. null

// Napraviti funkciju gde se trazi unos od strane korisnika i vraca poruka da li je uneta vrednost TRUTHY ili FALSY vrednost.

const unesiteVrednost = () => {
  let vrednost = prompt("Unesite neku vrednost:");
  if (vrednost) {
    console.log("Uneta vrednost je truthy.");
  } else {
    console.log("Uneta vrednost je falsy.");
  }
};
unesiteVrednost();

// Ako korisnik unosi broj:

function isTruthyNubmer() {
  const userInput = +prompt("Unesite nekim broj:");
  if (userInput) {
    return "Uneli ste TRUTHY vrednost";
  } else {
    return "Uneli ste FALSY vrednost";
  }
}
console.log(isTruthyNubmer());

// Trazi se unos od strane korisnika sve dok ne unese bilo sta:
let recenica = "";
while (!recenica) {
  recenica = prompt("Unesite neku recenicu.");
}
