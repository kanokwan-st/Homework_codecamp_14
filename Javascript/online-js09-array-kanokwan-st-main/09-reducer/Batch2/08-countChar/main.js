let str = 'I live in Thailand';
// expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}

const countChar = str.toLowerCase().split('').reduce((count,x) => {
    if (!(x in count) && (x != ' ')) count[x] = 1;
    else if (x in count) count[x] += 1; 
    return count;
}, {})

console.log(countChar);