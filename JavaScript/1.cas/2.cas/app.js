// Neku poruku u JavaSciptu mozemo prikazati na vise nacina:

// 1. innerHTML
naslov = document.getElementById("naslov");
naslov.innerHTML = "Prvi nacin ispisa";

// 2. document.write - obicno se koristi za testiranje koda.

// 3. alert{} - upozorenje korisniku:
//alert("Jos jedan nacin prikazivanja poruke");

// 4. console.log() - Prikazivanje nekih informacija u konzoli. Najcesce koriscen metod.
console.log("Poruka u konzoli.");

// JavaScript nazivi promenljivih //

// Ime promenljive u JavaScriptu mora poceti:
// 1. Velikim ili malim slovom(A-Z ili a-z)
// 2. $(dollar sign)
// 3. _(donja crta)

// Broj moze biti sadrzan u nazivu promeljive, ali promenljiva ne sme poceti brojem.

//JavaScript je case sensitive (razlikuje velika i mala slova)!!!

a = 10;
// console.log(A): error - A is not defined
console.log(a); // 10

// Zapisianje promenljivih koje sadrze 2 ili vise reci:

// vecernji termin nije ispravan nacin da napravimo razmak
vecernji_termin = 19.3; //ispravan nacin zapsivanja promenljive - Undercore
vecernjiTermin = 19.3; //ispravan nacin zapsivanja promenljive - Upper Camel Case(Pascal Case)
vecernjiTermin = 19.3; //ispravan nacin zapsivanja promenljive. Najcesce kosircen nacin zapisivanja promenljive u JavaScriptu. - Lover Camel Case

// deklaracija    i    inicijalizacija
// Postoje 4 nacina za deklarisanje u JavaScriptu:

// 1. Koriscenjem var rezervisane reci (keyword). Ranije se vise koristila (DOK NISMO DOBILI NOVE DVE).

var a; // deklaracija promenljive (obezbedjivanje lokacijske memorije za promenljivu a)
a = 10; // inicijalizacija promenljive (dodeljivanje vrednosti vec deklarisanoj promenljivoj a).
//console.log(a);

// Kroz jednu liniju koda mozemo takodje izvrsiti deklaraciju i inicijalizaciju.
var a = 10;

// 2. Koriscenjem let rezervisane reci (keyword). Promenljive koje su sklone menjanju vrednosti.

//let b; Deklarisanje promenljive b
//let = 14; Incijalizacija promeljive b

// Kroz jednu liniju koda mozemo takodje izvrsiti deklaraciju i inicijalizaciju
console.log(b);
let b = 14;

// 3. Koriscenjem const rezervisane reci (keyword). Na ovaj nacin deklarisemo promeljive cija se vrednost nece menjati.

// Nije moguca posebna deklaracija i inicijalizacija za promeljive definisane preko const keyword.
//const c;
//c = 20;

// Neophodno je odjednom izvrsiti deklaraciju i inicijalizaciju:
const c = 20;
console.log(c);

// 4. Koriscenjem nicega:
d = 5;
console.log(5);

// Variijable (promeljive) u JavaScriptu predstavljaju kontejnere za skladistenje vrednosti.
