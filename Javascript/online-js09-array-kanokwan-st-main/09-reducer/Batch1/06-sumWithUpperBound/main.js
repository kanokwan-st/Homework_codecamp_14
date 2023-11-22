let str = '31 45 12 67 34 86 23 37 19 41';

const sumWithUpperBound = str.split(' ').reduce((sum,x) => {
    if (x < 40) sum += Number(x);
    return sum;
}, 0);

console.log(sumWithUpperBound);