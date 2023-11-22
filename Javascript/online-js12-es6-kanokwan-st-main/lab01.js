// Lab 1
// จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด

function multiNum() {
    let multi = 1;
    for (i=0; i < arguments.length; i++) {
        multi *= arguments[i];
    }
    return multi;
}

multiNum(2,3);




//หรืออีกวิธี ใช้ ... ตามด้วยชื่อ array ของ arguments เป็นอะไรก็ได้
// function multiNum(...argss) {
//     let multi = 1;
//     for (i=0; i < argss.length; i++) {
//         multi *= argss[i];
//     }
//     return multi;
// }
// multiNum(2,3);


