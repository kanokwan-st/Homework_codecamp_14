function isPrime(num) {

    let divisible = "";
    let ans = "";

    for (let i=1; i<=num; i++) {
        if (num%i == 0) divisible += i;
    }
    // console.log(divisible);
    if (divisible == `1${num}`) ans = "Prime Number";
    else ans = "Not Prime Number"
    console.log(`${num} is ${ans}`);
}

isPrime(6);