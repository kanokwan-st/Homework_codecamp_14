const notebook = {
    brand: 'ASUS',
    model: 'Vivobook D413IA-EB303TS',
    processor: 'AMD Ryzen 7 4700U 3.6GHz',
    graphics: 'Integrated Graphics : AMD Radeon Graphics',
    ram: '8GB DDR4 Onboard',
    storage: '512GB PCIe NVMe M.2 SSD'
  };

// วิธี for ... in loop
const obj = new Object();
for (const key in notebook) {
    obj[key] = notebook[key];
}
console.log(obj);



// วิธี Object.assign               // Object.assign(target, source) ก๊อปค่า source ไปใส่ที่ target
const obj2 = new Object();
Object.assign(obj2, notebook);
console.log(obj2);