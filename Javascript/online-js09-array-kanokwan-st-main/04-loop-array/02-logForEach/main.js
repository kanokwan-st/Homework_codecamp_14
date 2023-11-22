const names = ["Mike", "Sid", "Jack", "Bill"];
let result = "";
names.forEach((element, index) => {
  result += `${index + 1}. ${element}\n`;
});
console.log(result);
