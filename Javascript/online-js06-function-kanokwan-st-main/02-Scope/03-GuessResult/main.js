function sayHi(name) {
    let name = "Guest";
    console.log(name); // * error เพราะค่า name ถูกประกาศไปแล้วในวงเล็บ
  }
  
  sayHi("Jim");