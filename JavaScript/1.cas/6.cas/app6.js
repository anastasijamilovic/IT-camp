// JavaScript Switch naredba//

//Switch naredbu koristimo kada imamo slucajeve koji preciziraju vrednost nekog izraza:

// switch (izraz) {
//   case vrednost1:
// blok koda za izvrasavanje u slucaju da je izraz === vrednosti1
// break;
//   case vrednost2:
// blok koda za izvrasavanje u slucaju da je izraz === vrednosti2
// break;
//   default:
// blok koda za izvrasavanje u slucaju da izraz nije jednak prethodnim vrednostima.
//  break; nije neophodno koristiti break na poslednjem slucaju
// }

// break keyword daje naredbu prestanka switch naredbe.
// break se ne sme izostaviti na kraju nekoj slucaja (sem zadnjeg).
//  Ako izostavimo break u slucaju koji je zadovoljen, izvrsice se i sledeci slucaj koji nije zadovoljen.

//Korsnik unosi broj:
//  Ako je uneo broj izmedju 12 i 15 (ukljucujuci oba) neka se ispise poruka "uneli ste vrednostBroja"
// defaultno : Niste uneli broj iz trazenog opsega.

const broj = Number(prompt("Unesite broj iz intervala [12,15]"));
switch (broj) {
  case 12:
    console.log("Uneli ste broj " + broj);
    break;
  case 13:
    console.log("Uneli ste broj " + broj);
    break;
  case 14:
    console.log("Uneli ste broj " + broj);
    break;
  case 15:
    console.log("Uneli ste broj " + broj);
    break;
  default:
    console.log("Niste unesli broj iz trazenog opsega");
}
