// Lab 3
// ให้เพิ่ม Method max และ sum เข้าไปใน Prototype ของ Array โดย
// max ให้ return ค่ามากสุดของตัวเลขใน Array
// sum ให้ return ผลรวมของตัวเลขใน Array

Array.prototype.max = function() {
    this.sort((a,b) => b-a);    //เรียงจากมากไปน้อย
    return this[0];
}

Array.prototype.sum = function() {
    return this.reduce((sumValue,x) => sumValue + x, 0)
}

const a = [2,5,3,7,9,1];

console.log(a.max());
console.log(a.sum());




// prototype allows you to add new properties and methods to arrays.

// prototype is a property available with all JavaScript objects.


