const nums = [7, 9, -5, -1, 0, 3];
const findElement = nums.filter( (element) => {
    return element < 0;
})

console.log(findElement[0]);

// filter
// Creates a new array filled with elements that pass a test provided by a function.