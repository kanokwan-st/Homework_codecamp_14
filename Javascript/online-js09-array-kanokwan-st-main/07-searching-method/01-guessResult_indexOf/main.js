const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); // * 1
console.log(beasts.indexOf('bison', 2)); // ** 4 (2 คือ from index)
console.log(beasts.indexOf('giraffe')); // ***  -1 (ไม่มีในbeasts)