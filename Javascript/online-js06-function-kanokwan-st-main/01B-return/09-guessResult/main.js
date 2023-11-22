function sayHi(age) {
  if (age < 12) alert("Hi kid");
}
console.log(sayHi); // * ให้ function sayHi เพราะไม่ได้ใส่ (age)
                    /* sayHi(age) {
                    if (age < 12) alert("Hi kid");
                    } */
console.log(sayHi(10)); // ** alert คำว่า Hi kid เพราะ age < 12



function sayHi(name) {
  if (name) {
    alert("Hi " + name);
    return;
  } else {
    return "Who are you";
  }
}
console.log(sayHi("John")); // *** alert คำว่า Hi John เพราะ nameใส่ค่า เป็น true
console.log(sayHi()); // **** console ขึ้นคำว่า Who are you เพราะ nameไม่ใส่ค่า เป็น false
