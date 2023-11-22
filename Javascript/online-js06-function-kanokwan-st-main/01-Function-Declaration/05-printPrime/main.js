function printPrime(num) {
  let primeNum = "";

  for (a = 2; a <= num; a++) {
    let divisible = "";
    for (i = 2; i <= a; i++) {
      if (a % i == 0) divisible += i;
    }

    if (divisible == a) primeNum += a + ", ";
  }

  console.log(primeNum);
}
