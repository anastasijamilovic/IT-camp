/* Niz (Array) u JavaScriptu predstavlja strukturu podataka za skladistenje vise vrednosti. 
Dakle, unutar jedne promenljive (jednog niza) mozemo imati vise razlicitih vrednosti (ili istih) vrednosti.
Nizovi u JavaScriptu dozvoljavaju duplikate.
Nizovi su heterogeni (unutar jednog niza mozemo imati elemente razlicitih tipova).
*/

const niz = ["string", 23, true];
console.log(niz);

/* Mozemo kreiati niz a nakon toga mu dodeliti elemente. */

const cars = [];
cars[0] = "Audi";
cars[1] = "BMW";
console.log(cars);

cars[3] = "Bugatti";
console.log(cars);
// array [index] sluzi za pristupanje elementu niza.
console.log(cars[2]);

/* length metoda nam vraca broj elemenata nekog niza. */

console.log(cars.length);

/* Promena vrednosti nekog elementa se moze vrsiti na isti nacin: */

cars[2] = "Ferrari";
console.log(cars);

/* Niz mozemo napraviti i preko: */
const cars2 = new Array("Volvo", "Toyota", "Porshe");
console.log(cars2);

/* Primer zbog kojeg treba izbegavati new Array()

Naraviti niz od jednog elementa tipa number*/
const points = [40];
console.log(points);

/* Pravi se niz od 40 undefined elemenata. */
const points2 = new Array(40);
console.log(points2);

/* Zbog jednostavnosti, citanja i brzine izvrsavanja je bolje koristiti []  nacin nego new Array*/

const arr = [[1, 2, 3], new Date(), false, function () {}];
console.log(arr);

/* Postoje 2 nacina za proveru da li je neka promenljiva niz:*/
const num = 3;
const fruits = ["apple", "pineapple", "strawberry"];
// 1. Array.isArray(arr)
console.log(Array.isArray(fruits));
console.log(Array.isArray(num));

// 2. arr instanceof Array
console.log(fruits instanceof Array);
console.log(num instanceof Array);

fruits[fruits.length] = "banana";
console.log(fruits);

/*
1. Write a JavaScript function to check whether an `input` is an array or not.
2. Write a JavaScript function to clone an array.
3. Write a JavaScript function to get the first element of an array. Passing the parameter  'n' will return the first 'n' elements of the array.
*/

// 1.

// 2.
const cloneArr = (arr) => {
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
};
console.log(cloneArr([1, 3, 5, 7, 9, 11, 13]));

/* for petlja koja se koristi kod iterirajucih objekata (2. verzija) */
// for (let element of arr) {
//     arr2[i] = element;
//   }

// 3.
const firstN = (arr, n = 1) => {
  // if(n === undefined){
  //     return arr[0]
  // }else{
  // }
  for (let i = 0; i < n; i++) {
    console.log(arr[i]);
  }
  return "Kraj!";
};
console.log(firstN([5, 4, 3, 2, 1]));
console.log(firstN([5, 4, 3, 2, 1], 3));
