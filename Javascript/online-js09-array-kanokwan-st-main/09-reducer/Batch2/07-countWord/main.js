let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}

const countWord = names.reduce((count,x) => {
    if (!(x in count)) count[x] = 1;
    else {
        count[x] += 1;
    }
    return count
}, {})

console.log(countWord);