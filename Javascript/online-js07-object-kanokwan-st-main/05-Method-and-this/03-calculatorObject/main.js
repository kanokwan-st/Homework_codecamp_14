let calculator = {
  read: function () {
    let a = +prompt("Put first number");
    let b = +prompt("Put second number");
    this.a = a;
    this.b = b;
  },
  sum: function () {
    return this.a + this.b;
  },
  mul: function () {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
