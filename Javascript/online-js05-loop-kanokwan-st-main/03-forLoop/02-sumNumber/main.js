let totalSum = 0;
let evenSum = 0;
let evenSumSquared = 0;
let oddSum = 0;
let oddSumSquared = 0;

for (let i = 1; i <= 100; i++) {
  totalSum += i;
  if (i % 2 == 0) {
    evenSum += i;
    evenSumSquared += i**2;
  }
  else {
    oddSum += i;
    oddSumSquared += i**2;
  }
}

console.log(`totalSum = ${totalSum}`);
console.log(`evenSum = ${evenSum}`);
console.log(`oddSum = ${oddSum}`);
console.log(`evenSumSquared = ${evenSumSquared}`);
console.log(`oddSumSquared = ${oddSumSquared}`);

