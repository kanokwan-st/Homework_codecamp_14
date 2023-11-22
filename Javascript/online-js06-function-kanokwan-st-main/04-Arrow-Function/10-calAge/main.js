const countAge = (year) => {
  let days = 0;
  for (year; year <= 2020; year++) {
    if (year % 4 == 0 && year % 100 == 0 && year % 400 != 0) days += 365;
    else if (year % 4 == 0) days += 366;
    else days += 365;
    // console.log(year)
  }
  return `${days} days`;
};

countAge(2020);
