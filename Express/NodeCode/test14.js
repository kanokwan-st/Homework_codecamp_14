//เปลี่ยนจากใช้ Promise(test10.js) เป็น Async await
let done = true

function isItDoneYet() {
    return new Promise( (resolve, reject) => {
        if (done) {
            const workDone = 'Here is the thing I built'
            resolve(workDone)
        } else {
            const why = 'Still working on something else'
            reject(why)
        }
    })
}

async function checkIt() {
    try {
        let d = await isItDoneYet()     //ทำฟังก์ชันข้างบนจนกว่าจะเจอresolve (d รับสิ่งที่resolveส่งมา)
        console.log(d)                  //พิมพ์หลัง isItDoneYet ทำงานเสร็จ
    } catch(err) {
        console.log(err)
    }
}

checkIt()