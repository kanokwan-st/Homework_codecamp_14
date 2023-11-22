//การใช้ Promise เพื่อควบคุม Asynchonus
//พิมพ์ 1 ก่อนแล้วรอ1วิค่อยพิมพ์ 2 แล้วค่อยพิมพ์ 3

//ผู้สร้าง
const pm = new Promise( (rs, rj) => {
    setTimeout( () => {
        console.log('2')
        rs()                    //ถ้ามี resolve จะทำ .then
    }, 1000)
})

//ผู้ใช้
console.log('1')
pm.then( () => {
    console.log('3')
} )