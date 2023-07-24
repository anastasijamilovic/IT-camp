const arr = ["Emir", "Ajsa", "Dzenan"];
//              1       2        3

/* Objekti su struktura podataka koja moze skladistiti vise vrednosti.
Elementi su zapisani u key/value (name/value) parovima.
key/value (name/value) parovi u JavaScript objektima se zovu svojstva (properties). */

const car = {
  type: "Fiat",
  model: 500,
  color: "white",
};

/* Pristupanje nekoj vrednosti svojstva (property) mozemo izvrsiti na dva nacina:
1. obj.propertyName
*/
console.log(car.type);

/* 2.obj["propertyName"] */

console.log(car["type"]);

const person = {
  firstName: "Anastasija",
  lastname: "Milovic",
  age: 17,
  fullName: function () {
    return this.firstName + " " + this.lastname;
  },
};
console.log(person.fullName());

/* U JavScriptu this referencira (ukazuje) na neki objekat.
this nije promenljiva vec rezervisana rec (keyword).
Ne mozemo promeniti vrednost this.
*/

const x = person;

console.log(x);

/* Promena vrednosti svojstva: */

person.firstName = "Ana";
console.log(person);

/* Dodavanje novog svojstva: */

person.adult = true;
console.log(person);
console.log(x);

/* Brisanje svojstva objekta: */
/* delete keyword brise i property name i value */

// delete x.adult; ili
delete x["adult"];

console.log(x);

/* Vrednost nekog svojstva u objektu moze biti objekat, niz... */
/* Od objekta mmozemo dobiti niz pomocu metode Object.values() */

const personArr = Object.values(person);

console.log(personArr);

/* Write a JavaScript program which returns a subset of a string. Go to the editor
Sample Data:
Expected Output : ["d", "do", "dog", "o", "og", "g"]
*/

const sub = (str) => {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    for (let k = i; k < str.length; k++) {
      arr.push(str.slice(i, k + 1));
    }
  }
  return arr;
};
console.log(sub("dog"));

// Domaci:
// Napraviti objekat student koji ce da ima vrednosti (po zelji), svojstava:
// ime, prezime, broj indeksa, ocene (niz svih ocena koje student ima u
// trenutnoj godini), prosekOcena (funckija koja na osnovu ocene vraca prosek
// datih ocena).

let student = {
  ime: "Anastasija",
  prezime: "Milovic",
  brojIndeksa: "5476486",
  ocene: [9, 9, 8, 7, 10],
  prosekOcena: function () {
    let ukupnoOcena = this.ocene.length;
    if (ukupnoOcena === 0) {
      return 0;
    }
    let sumaOcena = this.ocene.reduce((acc, ocena) => acc + ocena, 0);
    return sumaOcena / ukupnoOcena;
  },
};
console.log("Ime:", student.ime);
console.log("Prezime:", student.prezime);
console.log("Broj indeksa:", student.brojIndeksa);
console.log("Ocene:", student.ocene);
console.log("Prosek ocena:", student.prosekOcena());
