// Lab 8
// จงเขียนฟังก์ชัน removeRandom โดยรับพารามิเตอร์มาเป็น Array และ return ค่าเป็น Array 
// ที่มี element ถูกลบออกไปหนึ่งตัวโดยตำแหน่งที่ลบให้เกิดจากการสุ่ม

let array1 = [10,20,30,40,50,60,70,80,90]

function removeRandom(arr) {
    const max = arr.length;
    const min = 0;
    const index = Math.floor(Math.random() * (max-min)) + min;
    array1.splice(index, 1);
    return array1;
}

removeRandom(array1);

