let flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
];
// expected result: [0, 1, 2, 3, 4, 5]

const flatArray = flattened.reduce((flat, x) => {
  flat.push(x[0], x[1]);
  return flat;
}, Array(0));
console.log(flatArray);
