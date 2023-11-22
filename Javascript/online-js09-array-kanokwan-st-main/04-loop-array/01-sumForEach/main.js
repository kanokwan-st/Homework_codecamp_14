// วิธี forEach
const array = [29, 17, 13, 47, 23, 31];
let sum = 0;
array.forEach( element => sum += element);
console.log(sum);




// วิธี reduce
const array1 = [29, 17, 13, 47, 23, 31];
const sum1 = array1.reduce( (total, number) => {
    return total + number //ใส่ในtotal
}, 0)

console.log(sum1);