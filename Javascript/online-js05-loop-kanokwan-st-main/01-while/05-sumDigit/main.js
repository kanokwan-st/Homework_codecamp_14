let n = prompt("Put Number");
let ans = 0;
let i = 0;
while (i < n.length) {
  ans += +n[i]; //ทำให้ n[i] เป็นnumber
  i++;
}
console.log(ans);
