// Lab 1
// ให้สร้าง Class ชื่อ Calculator มี property และ method ดังนี้
// value คือค่าตัวเลขปัจจุบัน (เริ่มต้นเป็น 0 หรือตามที่กำหนด) เช่น new Calculator(10) ให้ value มีค่าเท่ากับ 10
// add() ให้รับค่าตัวเลขและรวมผลรวมเข้าใน value
// subtract() ให้รับค่าตัวเลขและหักออกจาก value
// multiply() ให้รับค่าตัวเลขและคูณตัวเลขกับ value
// divide() ให้รับค่าตัวเลขและนำไปหาร value
// show() ให้ alert ค่า value

class Calculator {
    constructor(value) {
        this.value = value
    }

    add(n) {
        this.value += n
    }

    subtract(n) {
        this.value -= n
    }

    multiply(n) {
        this.value *= n
    }

    divide(n) {
        this.value /= n
    }

    show() {
        alert(this.value)
    }
}