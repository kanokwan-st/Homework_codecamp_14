let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin];

function getAverageAge(arr) {
    let arr1 = arr.reduce((sumAge, currentValue) => {
        return sumAge + currentValue.age
    }, 0);
    return arr1 / arr.length;
}

console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33
