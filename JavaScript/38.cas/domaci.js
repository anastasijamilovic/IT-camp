// 1. Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elementima cija je duzina <= 6.

// 2. Napraviti novi niz koji filtrira postojeci i vraca novi
//  sa onim elementima ciji je tip "boolean".

// 3. Napraviti funkciju koja pravi niz koji ce iz postojeceg napraviti novi uz ispunjenje uslova:
//    value > 2 => value * 7
//    value >2 and value <8 => (value*4)/2
//    Ostale vrednosti da ne uzima u obzir
//    I na kraju treba novi niz vratiti sa godinama <10.

// 4. Write a function that converts an array of values from miles to kilometres using the map method.
// In the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and
// return this variable.

// 5. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. Go to the editor
// Sample array :
array1 = [1, 0, 2, 3, 4];
array2 = [3, 5, 6, 7, 8, 13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

// 1.
let postojeciNiz = ["jabuka", "banana", "kruška", "šljiva", "narandza"];
let noviNiz = postojeciNiz.filter((element) => element.length <= 6);
console.log(noviNiz);

// 2.
let mojNiz = [true, "banana", false, 1, true];
let drugiNiz = postojeciNiz.filter((element) => typeof element === "boolean");
console.log(drugiNiz);

// 5.
function sOArr(array1, array2) {
  const maksDuz = Math.max(array1.length, array2.length);
  const result = [];
  for (let i = 0; i < maksDuz; i++) {
    const value1 = array1[i] || 0;
    const value2 = array2[i] || 0;
    const sum = value1 + value2;
    result.push(sum);
  }
  return result;
}
const arr1 = [1, 0, 2, 3, 4];
const arr2 = [3, 5, 6, 7, 8, 13];
const sumArray = sOArr(arr1, arr2);
console.log(sumArray);

// 3.
const third = (arr) => {
  const arr2 = arr.filter((value) => typeof value === "number" && value > 2);
  const arr3 = arr2.map((value) => {
    if (value < 8) {
      return value * 2;
    } else {
      return value * 7;
    }
  });
  return arr3.filter((value) => value < 10);
};
console.log(third([1, 2, 3, 5, 7, 9, 11]));
