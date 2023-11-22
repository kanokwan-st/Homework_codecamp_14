let num = 1;
let ans = 0;
let count = 0;

while (num > 0) {
  num = +prompt("Put Number");
  if (!isNaN(num) && num != "") {
    ans += num;
    count++;
    // console.log("this is" + count);
  } else {
    console.log("sum = " + ans);
    console.log("average = " + ans / count);
  }
}
