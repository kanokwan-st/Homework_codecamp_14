// 1. จำนวน transaction ทั้งหมด
let transaction = sales.length;
console.log(transaction);

// 2. จำนวนลูกค้าที่แตกต่างกัน มีใครบ้าง แต่ละคนซื้อไปยอดรวมกันเท่าไหร่ กี่เครื่อง
// expect 
/* 
{
    Sun: {
        totalAmount: 3,
        totalPrice: ...
    },
    Tle: {
        totalAmount: 3,
        totalPrice: ...
    },
    ...
}  
*/

const customerData = sales.reduce((data,x) => {
    if (!(x.customer in data)) {    //ถ้าไม่มีชื่อลูกค้าใน data
        if (x.discount in x) {  //ถ้ามี discount
            data[x.customer] = {
            totalAmount: 1,
            totalPrice: x.product.unitPrice*(1-x.discount)
            };
        } else {    //ถ้าไม่มี discount
            data[x.customer] = {
            totalAmount: 1,
            totalPrice: x.product.unitPrice
            };
        }
    }
    else {  //ถ้ามีชื่อลูกค้าใน data อยู่แล้ว
        if (x.discount in x) {  //ถ้ามี discount
            data[x.customer].totalPrice += x.product.unitPrice*(1-x.discount);
        } else {    //ถ้าไม่มี discount
            data[x.customer].totalPrice += x.product.unitPrice;
        }
        data[x.customer].totalAmount += 1;
    }
    return data;
}, {})
console.log(customerData);


// 3. ยอดขายทั้งหมด (หลังหัก discount)
const value = Object.values(customerData);  //แปลงเป็น array ของ value ก่อน
const allTotalPrice = value.reduce((all,x) => all + x.totalPrice, 0);
console.log(allTotalPrice);


// 4. สินค้าที่ถูกขายมี่กี่ยี่ห้อ แต่ละยี่ห้อขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่
// expect 
/* 
{
    iPhone: {
        totalAmount: 25,
        totalPrice: ...
    },
    Samsung: {
        totalAmount: 15,
        totalPrice: ...
    },
    ...
}  
*/
const productData = sales.reduce((data,x) => {
    if (!(x.product.name in data)) {    //ถ้าไม่มีชื่อยี่ห้อใน data
        if (x.discount in x) {
            data[x.product.name] = {
            totalAmount: 1,
            totalPrice: x.product.unitPrice * (1-x.discount)
            };
        }
        else {
            data[x.product.name] = {
            totalAmount: 1,
            totalPrice: x.product.unitPrice
            };
        }
    } else {  //ถ้ามีชื่อยี่ห้อใน data อยู่แล้ว
        if (x.discount in x) {
            data[x.product.name].totalAmount += 1;
            data[x.product.name].totalPrice += x.product.unitPrice * (1-x.discount);
            }
        else {
            data[x.product.name].totalAmount += 1;
            data[x.product.name].totalPrice += x.product.unitPrice;    
            }  
        }
    return data;
}, {});

console.log(`There are ${Object.keys(productData).length} types of products.`);
console.log(productData);  


// 5. สินค้าที่ถูกขายมีกี่รุ่นในแต่ละยี่ห้อ แต่ละรุ่นขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่
// expect 
/* 
{
    Samsung: {
        S21: {
            totalAmount: 25,
            totalPrice: xxx
        },
        A31: {
            totalAmount: 25,
            totalPrice: xxx
        },
        ...
    },
    iPhone: {
        12 Pro: {
            totalAmount: 25,
            totalPrice: xxx
        },
        12: {
            totalAmount: 25,
            totalPrice: xxx
        },
        ...
    },
    ...
}  
*/
const modelData = sales.reduce((data,x) => {
    if (!(x.product.name in data)) {   //ถ้ายังไม่มียี่ห้อนี้
        if (x.discount in x) {  //ถ้ามีส่วนลด
            data[x.product.name] = {
                [x.product.model]: {
                    totalAmount: 1,
                    totalPrice: x.product.unitPrice * (1-x.discount)
                }
            }
        } else {    //ถ้าไม่มีส่วนลด
            data[x.product.name] = {
                [x.product.model]: {
                    totalAmount: 1,
                    totalPrice: x.product.unitPrice
                }
            }
        }
        
    } else {    //ถ้ามียี่ห้อนี้แล้ว
        if (!(x.product.model in data[x.product.name])) {   //ถ้ายังไม่มีโมเดลนี้
            if (x.discount in x) {  //ถ้ามีส่วนลด
                data[x.product.name][x.product.model] = {
                    totalAmount: 1,
                    totalPrice: x.product.unitPrice * (1-x.discount)
                }
            } else {    //ถ้าไม่มีส่วนลด
                data[x.product.name][x.product.model] = {
                    totalAmount: 1,
                    totalPrice: x.product.unitPrice
                }
            }
        } else {    //ถ้ามีโมเดลนี้แล้ว
            if (x.discount in x) {  //ถ้ามีส่วนลด
                data[x.product.name][x.product.model].totalAmount += 1;
                data[x.product.name][x.product.model].totalPrice += x.product.unitPrice * (1-x.discount);
            } else {    //ถ้าไม่มีส่วนลด
                data[x.product.name][x.product.model].totalAmount += 1;
                data[x.product.name][x.product.model].totalPrice += x.product.unitPrice;
            }
        }
    }
    return data;
}, {});

console.log(modelData);


// 6. หายอดรวมของการจ่ายแต่ละประเภท (Cash, Credit, ...)
const PurchasePrice = sales.reduce((price,x) => {
    if (x.discount in x) {
        if (x.type == 'Cash') {
            price.Cash += x.product.unitPrice * (1 - x.discount);
        } else if (x.type == 'Credit') {
            price.Credit += x.product.unitPrice * (1 - x.discount);
        } else if (x.type == 'Airpay') {
            price.Airplay += x.product.unitPrice * (1 - x.discount);
        } else if (x.type == 'True Wallet') {
            price['True Wallet'] += x.product.unitPrice * (1 - x.discount);
        } 
    } else {
        if (x.type == 'Cash') {
            price.Cash += x.product.unitPrice;
        } else if (x.type == 'Credit') {
            price.Credit += x.product.unitPrice;
        } else if (x.type == 'Airpay') {
            price.Airplay += x.product.unitPrice;
        } else if (x.type == 'True Wallet') {
            price['True Wallet'] += x.product.unitPrice;
        } 
    }
    return price;
}, {Cash: 0, Credit: 0, Airplay: 0, 'True Wallet': 0})

console.log(PurchasePrice);



// 7. หายอดรวมในแต่ละวัน
const dayData = sales.reduce((data,x) => {
    if (!(x.saleDate in data)) {    //ถ้าไม่มีวันใน data
        if (x.discount in x) {  //ถ้ามี discount
            data[x.saleDate] = {
            totalAmount: 1,
            totalPrice: x.product.unitPrice*(1-x.discount)
            };
        } else {    //ถ้าไม่มี discount
            data[x.saleDate] = {
            totalAmount: 1,
            totalPrice: x.product.unitPrice
            };
        }
    }
    else {  //ถ้ามีวันใน data อยู่แล้ว
        if (x.discount in x) {  //ถ้ามี discount
            data[x.saleDate].totalPrice += x.product.unitPrice*(1-x.discount);
        } else {    //ถ้าไม่มี discount
            data[x.saleDate].totalPrice += x.product.unitPrice;
        }
        data[x.saleDate].totalAmount += 1;
    }
    return data;
}, {})
console.log(dayData);


// 8. เรียงยอดขายของแต่ละรุ่นจากมากไปน้อย


// 9. เรียงลูกค้าที่ซื้อมากที่สุดจากมากไปน้อย
