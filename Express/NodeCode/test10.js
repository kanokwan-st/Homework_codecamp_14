//การใช้ promise เพื่อควบคุม Async(ไม่ต้องรอ แต่อยากให้บางตัวรอ)

let done = true

const isItDoneYet = new Promise((resolve, reject) => {
    if (done) {
        const workDone = 'Here is the thing I built'
        resolve(workDone)
    } else {
        const why = 'Still working on something else'
        reject(why)
    }
})

//resolve ส่งค่าให้ .then
//reject ส่งค่าให้ .catch

const chechIfItsDone = () => {
    isItDoneYet
        .then( ok => {
            console.log('come from reslove state in Promise')
            console.log(ok)
        })
        .catch(err => {
            console.log('come from reject state in Promise')
            console.log(err)
        })
}

chechIfItsDone()