function squareArr(arr) {
    arr.forEach((element, index) => {
        arr[index] = element**2;
    })
}

const arr = [2, 3, 5, 7, 11];
squareArr(arr); // [4, 9, 25, 49, 121]