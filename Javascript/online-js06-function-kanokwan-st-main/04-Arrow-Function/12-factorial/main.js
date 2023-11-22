const factorial = (num) => {
    let sum = 1;
    for (i=2; i<=num; i++) {
        sum *= i;
    }
    return sum;
}

factorial(3);