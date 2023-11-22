const summary = new Array();
const a = new Array();
const b = new Object();


const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 }
];

sales.forEach((element,index) => {
    if (element.hasOwnProperty('discount')) {
        a[index] = element.price * (1 - element.discount);
    } else {
        a[index] = element.price;
    }

    b.netPrice = a[index]; // object b เปลี่ยนตลอด ถึงจะpush เข้าไปใน array แล้วก็ยังเปลี่ยนค่าได้
    summary.push(Object.assign({},b));  //ทำให้ object ไม่เปลี่ยน (ใช้วิธี copy object)
    
})

console.log(a);
console.log(b);
console.log(summary);

