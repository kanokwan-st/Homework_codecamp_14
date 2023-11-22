const leapYear = (year) => {
    if (year % 4 == 0) {
        if (year % 100 == 0 && year % 400 != 0) return "Not leap year";
        else return "leap year";
    }
}

leapYear(2000);
leapYear(100);