const fs = require('fs')
let data, jsobj, users, newdata

data = fs.readFileSync('./sample.json')
jsobj = JSON.parse(data)
users = jsobj.users

//ทุกกล่องทำตามคำสั่งในฟังก์ชัน (เปลี่ยนเบอร์ในuser)
users.map( x => {
    x.phoneNumber = x.userId.toString().repeat(7)
    console.log(`${x.firstName} : ${x.phoneNumber}`)
} )

newdata = JSON.stringify(jsobj)
fs.writeFileSync('./output.json', newdata)
console.log('Save output.json OK')

