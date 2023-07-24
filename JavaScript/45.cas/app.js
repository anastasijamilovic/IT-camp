// Domaci:
// Napraviti objekat sa sledecim svojstvima:
// 1. firstName,
// 2. lastName,
// 3. language,
// 4. setLanguage - metoda za setovanje jezika,
// 5. setNickName - metoda (svaka osoba ima nadimak sastavljen od prva dva slova
// imena i prva dva slova prezimena)

let person = {
  firstName: "Anastasija",
  lastName: "Milovic",
  language: ["Serbian", "English"],
};

person.addLanguage = function (lang) {
  this.language.push(lang);
};

person.addLanguage("German");

person.removeLanguage = function (lang) {
  //   const position = this.language.indecOf(lang);
  //   if (position !== -1) {
  //     this.language.splice(position, 1);
  //   }
  const newArr = this.language.filter((language) => language !== lang);
  this.language = newArr;
};
person.removeLanguage("English");

person.setNickname = function () {
  let prvi = this.firstName.slice(0, 2).toLowerCase();
  let drugi = this.lastname.slice(0, 2).toLowerCase();
  let treci;
};
