// 1.
const first = () => {
  const a = +prompt("Unesite prvu potencijalnu stranicu pravougaonika:");
  const b = +prompt("Unesite prvu potencijalnu stranicu pravougaonika:");
  const c = +prompt("Unesite prvu potencijalnu stranicu pravougaonika:");
  const d = +prompt("Unesite prvu potencijalnu stranicu pravougaonika:");
  if (
    ((a === b) === c) === d ||
    (a === b && c === d) ||
    (a === c && b === c) ||
    (a === d && b === c)
  ) {
    return "Moguce je formirati pravougaonik";
  } else {
    return "Nije moguce formirati pravougaonik";
  }
};
console.log(first());

// 2.
const second = () => {
  const brojSekundi = +prompt("Unesite broj sekundi");
  const sati = Math.floor(brojSekundi / 3600);
  const minuti = Math.floor(brojSekundi % 3600) / 60;
  const sekunde = brojSekundi % 60;
  return `${sati}h ${minuti}m ${sekunde}s`;
};
console.log(second());
