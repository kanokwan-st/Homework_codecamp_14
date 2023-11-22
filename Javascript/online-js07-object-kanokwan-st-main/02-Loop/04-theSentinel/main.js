let key = '';
let value = '';
let obj = new Object();

while (true) {
    key = prompt('Put Key');
    if (key == 'stop') {
        break;
    } 
    else {
        value = prompt('Put Value');
        obj[key] = value;
    }
}

console.log(obj);


