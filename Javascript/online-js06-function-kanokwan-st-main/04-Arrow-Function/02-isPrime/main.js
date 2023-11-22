const isPrime = (num) => {
  let iP = true; //Prime status
  for (i = 2; i < num; i++) {   //ระหว่าง2ถึงก่อนตัวเอง ถ้ามีตัวที่หารลงตัว แสดงว่าไม่ใช่ Prime Number
    if (num % i == 0) {
      iP = false;
      break;
    }
  }

  if (iP) console.log("IsPrime");
  else console.log("NotPrime");
};

isPrime(3);
