const fs = require('fs')
let data, jsobj, users, newdata

data = fs.readFileSync('./sample.json')
jsobj = JSON.parse(data)
users = jsobj.users

users.map( x => {
    if ( x.lastName === 'mac') x.lastName = 'apple' //ถ้านามสกุลเป็นmacให้เปลี่ยนเป็นapple
})

newdata = JSON.stringify(jsobj)
fs.writeFileSync('./output2.json',newdata)
console.log('Ok...')


