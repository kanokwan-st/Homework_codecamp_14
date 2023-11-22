let user = {
  name: 'John',
  sayHi: function () {
    console.log(this.name);
  }
};

(user.sayHi)(); // * John เพราะ เรียกใช้งานฟังก์ชัน (this คือ object ที่อยู่หน้าจุด (ในที่นี้คือ user))
//this.name == user.name == 'John'