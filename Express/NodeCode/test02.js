const fs = require('fs');

//อ่านไฟล์แบบ Sync (รอให้เสร็จค่อยทำอย่างอื่น)
const data = fs.readFileSync('./readme.txt')
console.log(data.toString())

console.log('Done...')