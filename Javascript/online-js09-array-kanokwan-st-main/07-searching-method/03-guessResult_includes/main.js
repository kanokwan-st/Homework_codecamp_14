console.log([1, 2, 3].includes(2)); // * true
console.log([1, 2, 3].includes(4)); // ** false
console.log([1, 2, 3].includes(3, 3)); // *** false
console.log([1, 2, 3].includes(3, -1)); // **** true  find at index = 3+(-1) = 2
console.log([1, 2, NaN].includes(NaN)); // ***** true
console.log(['1', '2', '3'].includes(3)); // ****** false


// includes(searchElement, fromIndex)

// if fromIndex is minus
// computed index = length + fromIndex
// If the computed index is less than or equal to 0, the entire array will be searched.