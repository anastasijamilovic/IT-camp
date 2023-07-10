/* 1. Iz niza od 10 elemenata izracunati sumu parnih brojeva niza */

const niz = [5, 2, 6, 18, 16, 24, 15, 7, 96, 54];
const parniBrojevi = niz.filter((broj) => broj % 2 === 0);
const sumaBrojeva = parniBrojevi.reduce((suma, broj) => suma + broj);

console.log(sumaBrojeva);

/* drugi nacin */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = (arr) => {
  const sum = arr.reduce((prev, curr) => {
    if (curr % 2 === 0) {
      return prev + curr;
    } else {
      return prev;
    }
  }, 0);
  return sum;
};
console.log(sum(numbers));

/* 2. Write a JavaScript program to find the most frequent item of an array.
Sample array:  */

for (let i = 0; i < arr11.length; i++) {
  for (let j = i; j < arr11.length; j++) {
    console.log(arr11[i], arr11[j]);
  }
}
