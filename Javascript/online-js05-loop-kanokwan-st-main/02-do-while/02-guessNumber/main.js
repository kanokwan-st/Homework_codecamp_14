let num = prompt("Put Number");
let guess;
let count = 0;

if (num >= 1 && num <= 99) {
  while (num != guess) {
    guess = prompt("Guess Number");
    count++;
    if (guess > num) alert("more than");
    else if (guess < num) alert("less than");
    else if (guess == num) alert(`Correct try: ${count} times`);
  }
} else {
  alert("Invalid Range");
}
