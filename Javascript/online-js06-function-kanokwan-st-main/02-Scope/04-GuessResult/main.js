let x = 1;
function func() {
  console.log(x); // * error เพราะต้องประกาศค่า x ก่อนเรียกใช้
  let x = 2;
}
func();