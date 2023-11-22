// Basic de-structuring...
// please see source code in slides

// 1
let user = {
    name: "John",
    years: 30
};

const { name, years: age, isAdmin = false } = user;

console.log(name);
console.log(age);
console.log(isAdmin);
