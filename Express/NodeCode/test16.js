// ใช้ Async await อ่านไฟล์ต่อไปเรื่อยๆ แทนการใช้ Promise .then (test08.js)
const fs = require('fs')

const getFile = (fileName) => {
    return new Promise((resolve, reject) => {
        // if (fileName == 'file02.txt') reject('Error from f02')
        fs.readFile(fileName, (err, data) => resolve(data) )
    })
}

async function runGetFile() {
    try {
        const data = await getFile('./start.txt')
        console.log(`${data}`)
        const d1 = await getFile(`${data}`)
        console.log(`${d1}`)
        const d2 = await getFile(`${d1}`)
        console.log(`${d2}`)
        const d3 = await getFile(`${d2}`)
        console.log(`${d3}`)
    } catch(err) {
        console.error('error : ' + err)
    }
}

runGetFile();