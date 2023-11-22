function sumSalaries(obj) {
    let sum = 0;

    if (Object.keys(obj).length === 0 && obj.constructor === Object) {
        return sum;
    } else {
        Arr = Object.values(obj);
        for (i=0; i<Arr.length; i++) {
            sum += Arr[i];
        }
    }
    return console.log(sum);
}


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

sumSalaries(salaries);