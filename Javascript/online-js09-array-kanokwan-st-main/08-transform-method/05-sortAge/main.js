const arr = [
  { name: 'John', age: 25 },
  { name: 'Leon', age: 26 },
  { name: 'Mick', age: 29 },
  { name: 'Pete', age: 30 },
  { name: 'Mary', age: 28 }
];

const arr1 = arr.sort((a,b) => {
    return a.age - b.age;
})

console.log(arr1);