let message = "Welcome to Thailand"; //Global variables

function logMessage(message) {
  message = "Hello everybody"; //ประกาศค่าแบบ Local variables (เพราะ message อยู่ในวงเล็บในบรรทัด3)
  console.log(message); // * Hello everybody เพราะ Local variables สำคัญกว่า Global variables
}

logMessage(message);
console.log(message); // ** Welcome to Thailand เพราะอยู่นอกfunction ทำให้ message เป็น Global variables 



let name = "John";  //Global variables

function sayHi(input) { // (input เป็น Local variables)
  console.log(name); // *** John เพราะดึงค่า Global variables มาใช้
  name = input; //เปลี่ยนแปลงค่า name ที่เป็น Global variables
}

sayHi();
console.log(name); // **** undefined เพราะ ไม่ได้ใส่ค่า input (name ในที่นี้เป็น Global variables) 