// Lab 2
// จงเขียนฟังก์ชัน filterOutOdds โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด และให้ return ค่าเป็น array ของเลขที่เป็นเลขคู่

function filterOutOdds() {
    const arr = [];
    for (i=0; i<arguments.length; i++) {
        if (arguments[i] % 2 == 0) arr.push(arguments[i]);
    }

    return arr;
}

console.log(filterOutOdds(2,5,4,9,6,8));