let key = '';
let value = 0;
let obj = new Object();

while (true) {
    key = prompt("Put fruit");

    if (key == 'stop') break;

    else {
        value = prompt("How many?");
        if (value > 1) key += 's';
    }

    obj[key] = value;
}

console.log(obj);