const array1 = [9, 17, 23, 5];
// ค่าที่มากกว่า 10
const arr1 = array1.filter((x) => x > 10); //เช็คค่าใน array1 ทีละค่า ถ้าตรงตามเงื่อนไขในฟังก์ชัน ให้เอาค่าใส่ใน arr1
console.log(arr1);


const array2 = [1, 2, 3, 4];
// ค่าที่เป็นเลขคี่
const arr2 = array2.filter((x) => x % 2 == 1);
console.log(arr2);



const array3 = [1, '1', 2, {}];
// ค่าที่ประเภทข้อมูลเป็น Number
const arr3 = array3.filter((x) => typeof(x) == 'number');
console.log(arr3);



const array4 = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
// ค่าที่มีตัวอักษรมากกว่า 6 ตัว
const arr4 = array4.filter((x) => x.length > 6);
console.log(arr4);



const array5 = [1, -3, 2, 8, -4, 5];
// ค่าที่เป็นเลขบวก
const arr5 = array5.filter((x) => x > 0);
console.log(arr5);



const array6 = [1, 3, 4, 5, 6, 7, 8];
// ค่าที่หาร 3 ลงตัว
const arr6 = array6.filter((x) => x % 3 == 0);
console.log(arr6);



const array7 = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
// ค่าที่ขึ้นต้นด้วยตัว E
const arr7 = array7.filter((x) => x[0] == 'E');
console.log(arr7);



const array8 = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
// ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด
const arr8 = array8.filter((x) => x === x.toUpperCase());
console.log(arr8);




const array9 = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi','Phrae'];
// ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่
const arr9 = array9.filter((x) => x.toUpperCase().includes('BURI'));
console.log(arr9);




const array10 = [
  { name: 'Ben', age: 14 },
  { name: 'Phil', age: 18 },
  { name: 'John', age: 32 },
  { name: 'Ann', age: 16 },
  { name: 'Paul', age: 24 }
];
// อายุไม่น้อยกว่า 18 
const arr10 = array10.filter((x) => x.age >= 18);
console.log(arr10);



const array11 = [
  { id: 1, name: 'Pepsi' },
  { id: 2, name: 'Mirinda' },
  { id: 3, name: 'Coke' },
  { id: 4, name: 'Fanta' },
  { id: 5, name: 'Sprite' }
];
// id ไม่เท่ากับ 4
const arr11 = array11.filter((x) => x.id != 4);
console.log(arr11);



const array12 = [
  { name: 'John', birth: '2001-07-31' },
  { name: 'Jack', birth: '1990-06-24' },
  { name: 'Jim', birth: '1984-12-13' },
  { name: 'Jeff', birth: '1996-02-05' },
  { name: 'Joe', birth: '2002-06-13' }
];
// เกิดเดือน 6
const arr12 = array12.filter((x) => {
    let a = x.birth.split("-");
    console.log(a);
    return a[1] == '06';
})
console.log(arr12);