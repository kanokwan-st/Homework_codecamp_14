// Lab 6
// จงเขียนฟังก์ชันที่รับค่า ชื่อ นามสกุล และ งานอดิเรก ซึ่งงานอดิเรกอาจมี 1 หรือมากกว่า 1 ก็ได้ 
// แล้วคืนค่าเป็น ชื่อ, นามสกุล, งานอดิเรก และจำนวนงานอดิเรก โดยใช้คุณสมบัติของ rest operator


function data(...args) {
    const obj = {};
    obj.hobbies = [];
    let n = 0;

    for (i=0; i < args.length; i++) {
        if (i == 0) obj.name = args[i];
        else if (i == 1) obj.surname = args[i];
        else {
            obj.hobbies.push(args[i]);
            obj.numHobbies = ++n;
        }
    }
    return obj;
}

console.log(data('L','ii','play','sleep'))
