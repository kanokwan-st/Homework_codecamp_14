// Lab 18
// จงเขียนฟังก์ชันตรวจสอบอายุ โดยรับข้อมูล user ที่อยู่ใน object ที่มี keys เป็น firstName lastName และ age 
// โดยถ้า user มีอายุมากกว่า 18 ให้แสดงผลเป็นการทักทายแล้วตามด้วยชื่อ-นามสกุล 
// ในกรณีที่มีอายุน้อยกว่าหรือเท่ากับ 18 ให้แสดงผลว่า ไม่มีสิทธิ์เข้าใช้งาน (ใช้ destructuring)

const user = {
    firstName: 'K',
    lastName: 'S',
    age: 23
}

//const firstName = user.firstName
//const lastName = user.lastName
//const age = user.age
//ใช้วิธี destructuring ทำให้เรียกใช้งานได้เลย ไม่ต้องเขียนยาว
const { firstName, lastName, age } = user

function checkAge(user) {
    if (age > 18) console.log(`Hello! ${firstName} ${lastName}`);
    else console.log('No pass');
}

checkAge(user)