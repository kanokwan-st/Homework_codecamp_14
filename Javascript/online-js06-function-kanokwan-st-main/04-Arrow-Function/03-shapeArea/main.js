const square = (n) => {
    n ** 2;
  };
  
  console.log(square(7)); // * undefined เพราะถ้าใส่ปีกกา ต้องมี return
  
  const calcCircleArea = (r) => Math.PI * r ** 2;
  console.log(calcCircleArea(3)); // ** 28.27 เพราะไม่ใส่ปีกกา ไม่ต้องมี return