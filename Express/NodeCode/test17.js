//เขียน test16.js อีกแบบ

const fs = require('fs')

function getFile(fileName) {
// const getFile = (fileName) => {
    return new Promise((resolve, reject) => {
        // if (fileName == 'file02.txt') reject('Error from f02')
        fs.readFile(fileName, (err, data) => resolve(data) )
    })
}

(async () => {
    try {
        let data = await getFile('./start.txt')
        console.log(`${data}`)
        data = await getFile(`${data}`)     //ฝั่งขวาใส่ค่าในฝั่งซ้าย
        console.log(`${data}`)
        data = await getFile(`${data}`)
        console.log(`${data}`)
        data = await getFile(`${data}`)
        console.log(`${data}`)
        
    } catch(err) {
        console.error('error : ' + err)
    }
}) ()
//ใช้ IIFE เรียกฟังก์ชันเลย 