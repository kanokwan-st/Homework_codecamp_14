//เขียนฟังก์ชันแล้ว export ไปใช้อีกที่
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports.getRandom = getRandom


//อีกวิธี เขียนสั้นๆ
let pi = 3.14
module.exports.circleArea = (r=2) => pi*r**2
                        //ใส่ค่าdefaultไว้