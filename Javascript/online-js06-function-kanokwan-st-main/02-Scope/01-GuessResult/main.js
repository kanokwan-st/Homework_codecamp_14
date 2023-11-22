let name = 'John';
function sayHi() {
  alert('Hi, ' + name);
}
name = 'Pete';
sayHi(); // * alert คำว่า Hi, Pete เพราะเปลี่ยนชื่อจากJohnมาเป็นPete
