// Lab 9
// จงเขียนฟังก์ชัน cloneArray โดยรับพารามิเตอร์มาเป็น Array และ 
// return ค่าเป็น Array ที่มี element เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว

let array1 = [10,20,30,40,50,60,70,80,90]

function cloneArray(arr) {
    const array2 = [...array1];
    return array2;
}

cloneArray(array1);