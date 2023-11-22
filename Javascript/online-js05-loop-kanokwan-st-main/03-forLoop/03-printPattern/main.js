let star = "";

for (let r = 1; r < 5; r++) {
  for (let c = 1; c <= r; c++) {
    star += " *";
  }
  star += "\n";
}
console.log(star);
