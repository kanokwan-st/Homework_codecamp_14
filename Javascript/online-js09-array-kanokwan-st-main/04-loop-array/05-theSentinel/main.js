let num = 0;
let sum = 0;
const Array1 = new Array();

while (!isNaN(num)) {
    sum += num;
    num = +prompt('Put number');
    
    Array1.push(num);
}

console.log(sum);
