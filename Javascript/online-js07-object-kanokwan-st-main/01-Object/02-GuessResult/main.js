const user = {
  email: 'cc@gmail.com',
  isActive: true
};

user.isActive = false;
console.log(user); // *  {email: 'cc@gmail.com', isActive: false} เพราะเปลี่ยนแปลง value
user = {};
console.log(user); // ** error เพราะ assign ค่าใหม่ให้ const ไม่ได้