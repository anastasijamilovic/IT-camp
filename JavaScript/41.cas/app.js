/* find() metoda vraca prvu vrednost niza koja je prosla test.
Ako nema elementa koji bi zadovoljio uslov find() metoda vraca undefined.
*/

const grupa = ["Anastasija", "Merjem", "Ajla", "Selver", "Dzana"];

/* Naci prvi element niza cije je ime duze od 8 karaktera. */
const prvi = grupa.find((student) => student.length > 8);
console.log(prvi);

const drugi = grupa.find((student) => student.length > 11);
console.log(drugi);

/* findIndex() metoda vraca poziciju prvog elementa koji je zadovoljio uslov. */

const prviIndex = grupa.findIndex((student) => student.length > 8);
console.log(prviIndex);

const drugiIndex = grupa.findIndex((student) => student.length > 11);
console.log(drugiIndex);

/* Ako imamo niz gde su elementi posebni nizovi i zelimo da napravimo niz sastavljen od elemenata podnizova
 mozemo primeniti fat() metodu. */

const arr = [
  [1, 3, 5, 7],
  [2, 4, 6, 8],
  [11, 22, 33, 44, 55, 66, 77, 88, 99],
];
const newArr = arr.flat();
console.log(arr);

/* Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity). */
const fruits = [
  "strawberry",
  "cherry",
  "STRAWberry",
  "apple",
  "apple",
  "STRAWBERRY",
];

const removeDuplicates = (arr) => {
  /*   const newArr = fruits.filter((el) => !newArr.includes(el.toLowerCase())); 
ne mozemo koristiti niz koji se tek kreira u uslovu same callback funkcije*/
  const newArr = [];
  arr.forEach((element) => {
    if (!newArr.includes(element.toLowerCase())) {
      newArr.push(element);
    }
  });
  return newArr;
};
console.log(removeDuplicates(fruits));
