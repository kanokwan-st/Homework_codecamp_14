// Lab 10
// จงเขียนฟังก์ชัน cloneObject โดยรับพารามิเตอร์มาเป็น Object และ return ค่า
// เป็น Object ที่มี key-value เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว

let object1 = { name : 'andy', age: 45 }

function cloneObject(obj) {
    const obj1 = JSON.parse(JSON.stringify(obj));
    return obj1;
}

const object2 = cloneObject(object1);
console.log(object1);
console.log(object2);
