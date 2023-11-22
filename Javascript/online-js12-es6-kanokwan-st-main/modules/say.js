let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MODULES_BECAME_STANDARD_YEAR = 2015;
function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

let quote = "Codecamp#14 is the best"
// a list of exported variables
export { months, MODULES_BECAME_STANDARD_YEAR, sayHi as hi, quote }; 

export default quote