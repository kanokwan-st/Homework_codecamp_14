let primeNumber = ""; //มีแค่ 1 กับ ตัวเอง ที่หารลงตัว

for (let m = 1; m <= 100; m++) {
  let divisible = ""; //หารลงตัว
  for (let n = 1; n <= m; n++) {
    if (m % n == 0) divisible += n;
  }
  if (divisible == `1${m}`) primeNumber += m+'\n';
}

console.log(primeNumber);

//2 หารลงตัวด้วย 12
//3 หารลงตัวด้วย 13
//4 หารลงตัวด้วย 124  ==> ไม่ใช่จำนวนเฉพาะ
//5 หารลงตัวด้วย 15
//6 หารลงตัวด้วย 1236 ==> ไม่ใช่จำนวนเฉพาะ