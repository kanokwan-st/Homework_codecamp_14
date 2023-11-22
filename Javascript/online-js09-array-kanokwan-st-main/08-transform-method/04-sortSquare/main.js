const arr = [-3, 2, 0, -7, 4, 6];

const arr1 = arr.sort((a,b) => {
    return a**2 - b**2;
});

console.log(arr1);