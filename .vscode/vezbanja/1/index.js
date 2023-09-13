/* 
primitives
complex types

conditionals
loops
object
arrays
arrays methods
callbacks
promies
async await
closure
classes
DOM
DOM manipulation
events
es6 js
*/

// var a = "";
// console.log(typeof a);

// function sum(a, b) {
// return a + b;
// }

// sum(1, 2);
// sum({}, []);

// console.log(sum(1, 2));
// console.log(sum({}, []));

// console.log(1 + 2 + "1", "prvi");
// console.log("22" + 2 + "1", "drugi");
// console.log(true + 2 + "1", "treci");
// console.log(false + 2 + "1", "cetvrti");
// console.log(true + true + "1", "peti");

// var c = "";
// const a = "";
// let b = "";

// var a = "string";
// console.log(window.a);

// console.log(document, window);

// var a = "smajb";

// console.log("" || false || true);
// console.log("yes" || 0 || true);

// console.log("a" && null && "b");
// console.log("a" && "c" && "b");

// if ("a" && null && "b") {
// } else {
// }

// const o = {};
// const n = [];
// o.property1 = "";

/* 
ako se na objektu nalazi property vratite vrednost
ako se ne nalazi vratite -1
*/
// const obj = { size: "12", width: "22" };
// function getProperty(obj, property) {
//   return typeof obj[property] == "undefined" ? obj[property] : -1;
//   //   obj.hasOwnProperty("property1");
// }

// getProperty(obj, "size");

// console.log(getProperty(obj, "size"));

// const n = [
//   [1, 2],
//   [2, 3],
// ];
// n[0][1];

const n = [1, 2, 3, 4];
n.forEach((element, index, array) => {});
n.filter();
n.map();
n.reduce();
