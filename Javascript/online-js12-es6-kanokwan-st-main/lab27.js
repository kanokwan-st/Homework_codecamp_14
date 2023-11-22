// Lab 27
// ให้ใช้ for … of กับ names (ให้ destructuring object ในแต่ละ iteration)
// ในแต่ละ iteration ให้ console.log ค่า Full name ออกมา

const names = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jack', lastName: 'Dann' },
  { firstName: 'Joe', lastName: 'Dunne' }
];

for (const e of names) {
  const { firstName, lastName } = e;  //destructuring (const firstName = e.firstName)
  console.log(firstName + ' ' + lastName);
}




// forEach ใช้เพื่อวนลูปรอบอาร์เรย์ 
// for-in ใช้วนลูปรอบ key ของอ็อบเจ็กต์ 
// for-of ใช้เพื่อวนลูปรอบ Iterable Objects