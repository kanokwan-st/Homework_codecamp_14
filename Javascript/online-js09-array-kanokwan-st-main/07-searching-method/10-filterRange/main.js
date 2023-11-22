const arr1 = [1, 2, 3, 4, 5, 6];

function filterRange(arr, a, b) {
    firstIndex = arr.findIndex((x) => x == a);
    secondIndex = arr.findIndex((x) => x == b);
    return arr.slice(firstIndex + 1, secondIndex);
}

filterRange(arr1, 2, 5);