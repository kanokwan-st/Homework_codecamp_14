function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Did parents allow you?");
  }
}

// ใช้ if แต่ห้ามใช้ else
function checkAge1(age) {
    if (age > 18) console.log(true);
    if (age <= 18) console.log(confirm("Did parents allow you?"));
}

// ใช้ ? แทน if
function checkAge2(age) {
    (age > 18) ? console.log(true) : console.log(confirm("Did parents allow you?"));
}

// ใช้ || แทน if
function checkAge3(age) {
    console.log(age > 18 || confirm("Did parents allow you?"));
}

