const fs = require('fs');

//อ่านไฟล์แบบ Async (ไม่ต้องรอ สั่งแล้วทำอย่างอื่นได้เลย)

//ทำฟังก์ชัน callback ต่อเมื่ออ่านไฟล์readmeเสร็จแล้ว 
fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        console.log('Error...');
        return;
    }
    console.log(data)
    console.log(data.toString())
} )

console.log('Done...') //คำสั่งนี้ทำก่อน เพราะอยู่นอกcallback (Async == ไม่รอข้างบน)
