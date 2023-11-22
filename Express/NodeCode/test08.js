// ใช้ Promise อ่านไฟล์ต่อไปเรื่อยๆ แทนการใช้ callback (test06.js)
const fs = require('fs')

const  getFile = (fileName) => {
    return new Promise((resolve, reject) => {
        // if (fileName.toString() === 'file02.txt') reject('Error from f02')
        fs.readFile(fileName, (err, data) => resolve(data) )
    })
}

getFile('./start.txt')
.then(data => {
    console.log(`${data}`)
    return getFile(`${data}`) })
.then(data => {
    console.log(`${data}`)
    return getFile(`${data}`) })
.then(data => {
    console.log(`${data}`)
    return getFile(`${data}`) })
.then(data => {
    console.log(`${data}`)
    return getFile(`${data}`) })
.catch(err => {
    console.log('Error : '+ err)
})