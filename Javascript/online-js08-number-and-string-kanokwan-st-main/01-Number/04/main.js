function twoDecimal(n) {
    return ( Math.floor(n*100) / 100 ).toFixed(2); 
}

console.log(twoDecimal(10.12345));
console.log(twoDecimal(5.2));
