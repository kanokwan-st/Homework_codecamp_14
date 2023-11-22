let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// expected result: ['a', 'b', 'c', 'e', 'd']

const uniqueChar = alphabets.reduce((uniq,x) => {
    if (!uniq.includes(x)) uniq.push(x);
    return uniq;
}, [])

console.log(uniqueChar);