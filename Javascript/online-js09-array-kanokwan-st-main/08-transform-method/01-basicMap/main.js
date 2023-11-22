const array1 = [1, 2, 30, 400];
// result: [2, 4, 60, 800]
const arr1 = array1.map((x) => x*2);
console.log(arr1);




const array2 = [1, 2, 3, 4];
// result: ["1", "2", "3", "4"]
const arr2 = array2.map((x) => String(x));
console.log(arr2);




const array3 = [1, '1', 2, {}];
// result: ["number", "string", "number", "object"]
const arr3 = array3.map((x) => typeof(x));
console.log(arr3);




const array4 = ['apple', 'banana', 'orange'];
// result: ["APPLE", "BANANA", "ORANGE"]
const arr4 = array4.map((x) => x.toUpperCase());
console.log(arr4);




const array5 = [1, 3, 4, 5, 6, 7, 8];
// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
const arr5 = array5.map((x) => {
    if (x % 2 == 0) return "even";
    else return "odd";
});
console.log(arr5);




const array6 = [1, -3, 2, 8, -4, 5];
// result: [1, 3, 2, 8, 4, 5]
const arr6 = array6.map((x) => Math.abs(x));
console.log(arr6);




const array7 = [100, 200.25, 300.84, 400.3];
// result: ["100.00", "200.25", "300.84", "400.30"]
const arr7 = array7.map((x) => x.toFixed(2));
console.log(arr7);




const array8 = [0, 5, 10, 7, 6, 5, 0];
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const arr8 = array8.map((x) => month[x]);
console.log(arr8);




const array9 = [1, 16, 81, 256, 625, 1296];
// result: [1, 2, 3, 4, 5, 6]
const arr9 = array9.map((x) => Math.sqrt(Math.sqrt(x)));
console.log(arr9);




const array10 = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
// result: ["apple", "banana", "watermelon"]
const arr10 = array10.map((x) => x.name);
console.log(arr10);




const array11 = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
// result: [14, 18, 32]
const arr11 = array11.map((x) => x.age);
console.log(arr11);





const array12 = [
  { name: 'apple', surname: 'London' },
  { name: 'banana', surname: 'Bangkok' },
  { name: 'watermelon', surname: 'Singapore' }
];
// result: ["apple London", "banana Bangkok", "watermelon Singapore"]
const arr12 = array12.map((x) => x.name + " "+ x.surname);
console.log(arr12);





const array13 = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-01' },
  { name: 'watermelon', birth: '1985-12-01' }
];
// result: [
//   { name: "apple", birth: "2000-01-01", age: 21 },
//   { name: "banana", birth: "1990-10-01", age: 31 },
//   { name: "watermelon", birth: "1985-12-01", age: 36 },
// ]
const arr13 = array13.map((x) => {
    let age = 2021 - x.birth.split("-")[0];
    return x.age = age;
});
console.log(arr13);




const array14 = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' }
];
// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]
const month1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const arr14 = array14.map((x) => {
    const date = x.birth.split("-");
    return (`<tr><td>${x.name}</td><td>${date[2]} ${month[+date[1] - 1]} ${date[0]}</td></tr>`)
})
console.log(arr14);

