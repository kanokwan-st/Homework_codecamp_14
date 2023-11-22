const fs = require('fs');

//ถ้าอยากให้ทำต่อกัน ให้ใส่ไปในฟังก์ชัน callback
for( let i = 0; i<20;i++) {
    fs.readFile('./codecamp.txt', 'utf8', (err,data) => {
        console.log(data);
        fs.readFile('./codecamp01.txt', 'utf8', (err,data) => {
            console.log(data);
        });
    })

    
}