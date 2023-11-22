let arr = [3.24, 2.78, 3.86, 1.37, 0.52];


const max = arr.reduce((mx,x) => {
    if (mx < x) mx = x;
    return mx
}, 0);
console.log(max);



const min = arr.reduce((mn,x) => {
    if (mn > x) mn = x;
    return mn
}, 10);
console.log(min);