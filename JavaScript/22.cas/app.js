/* Za uneti string A treba kreirati novi string B koji se sastoji od prve i poslednje reci (odvojenih razmakom)
unetog stringa. Npr. za A=`Svuda podji, kuci dodji`, dobija se B= `Svuda dodji`.
Podrazumeva se da uneti string nema vodece ili pratece razmake.
 */

const firstAndLastWord = (A) => {
  const arr = A.split(" ");
  const firstWord = arr[0];
  const lastWord = arr[arr.length - 1];
  // return firstWord + " " + lastWord
  // return firstWord.concat(" ", lastWord)
  const B = `${firstWord} ${lastWord}`;
  return B;
};
console.log(firstAndLastWord("Svuda podji kuci dodji."));

/* Iz unetog stringa treba izdvojiti N znakova sa leve strane. Npr. 
za string `Pera ima devojku` i N=6, dobija se `Pera i`. Ako je N vece od duzine stringa, kao rezultat se dobija
 ceo string.
 */

function firstSix(sentence, N) {
  if (N >= sentence.length) {
    return sentence;
  } else {
    return sentence.substr(0, N);
  }
}
console.log(firstSix("Pera ima devojku", 7));

/* Za uneti string A, treba izvojiti podstring B, koji pocinje od unete pozicije N i ima M znakova. 
Npr. za string `Pera ima devojku` , N=6 i M=7, dobija se B=`ima dev`.
*/

const subStr2 = (sentence, N, M) => {
  // return.sentence.substring(N, N + M)
  return sentence.substr(N, M);
};
console.log(subStr2("Pera ima devojku", 6, 7));

/* Unosi se string A i znak Z. Kreirati novi string B koji se dobija tako sto se iz unetog stringa
izbacuje svaka pojava znaka Z. Npr. za unet string "Madagaskar" i znak "a", dobijamo rezultat "Mdgskr"
 */

const rec = "Madagaskar";
console.log(rec.replace(/a/g, ""));

const newString = (A, Z) => {
  let noviString = "";
  let i = 0;
  while (i < A.length) {
    if (A[i] !== Z) {
      noviString += A[i];
    }
    i++;
  }
  return noviString;
};
console.log(newString("Madagaskar", "a"));

// Domaci:
// 1.	Izdvojiti N znakova sa desne strane (poslednjih N znakova) unetog stringa. Npr. za string 'Pera ima devojku' i N=5, dobija se 'vojku'.

function izdvojiNznakova(string, N) {
  if (N >= string.length) {
    return string;
  } else {
    return string.slice(-N);
  }
}
let noviString = "Pera ima devojku";
let N = 5;
let noviZnakovi = izdvojiNznakova(noviString, N);
console.log(noviZnakovi);
