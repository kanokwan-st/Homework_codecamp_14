// Lab 20
// จงเขียนฟังก์ชัน topSalaries(salaries) เพื่อ return ชื่อคนที่มี salary สูงสุด
// ถ้า salaries เป็น empty object ให้ return null
// ถ้ามีคนที่ได้ salary มากสุดให้ return ชื่อคนใดคนหนึ่ง




function topSalaries(salaries) {
  if (salaries == {}) return null;
  else {
      let max = 0;
      let maxName = '';
      for (e in salaries) {
        if (salaries[e] > max) {
          max = salaries[e];
          maxName = e;
      }
    }
  return [maxName,max];
}
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

topSalaries(salaries)

