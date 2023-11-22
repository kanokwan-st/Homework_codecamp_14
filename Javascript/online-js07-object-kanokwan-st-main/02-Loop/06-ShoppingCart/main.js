// let name = prompt("Put name");
// let amount = prompt("Put amount");
// let price = prompt("Put price");
// let discount = prompt("Put discount");
let obj = new Object();

obj.name = prompt("Put name");
obj.amount = prompt("Put amount");
obj.price = prompt("Put price");
obj.discount = prompt("Put discount");

if (obj.discount == 0) delete obj.discount;

console.log(obj);

function realPrice(obj) {
    if ('discount' in obj) {
        return obj.price * obj.amount * (100 - obj.discount) /100;
    } else {
        return obj.price * obj.amount;
    }
}




// ใช้ hasOwnProperty เช็คว่ามี key ชื่อว่า discount อยู่ใน object มั้ย
// function realPrice(obj) {
//     if (obj.hasOwnProperty('discount')) {
//         return obj.price * obj.amount * (100 - obj.discount) /100;
//     } else {
//         return obj.price * obj.amount;
//     }
// }