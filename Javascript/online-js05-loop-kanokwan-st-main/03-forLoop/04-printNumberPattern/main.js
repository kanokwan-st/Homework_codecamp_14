let num = "";

for (let r=1; r<=8; r++) {
    for (let c=1; c<=r; c++) {
        num += ` ${c}`;;
    }
    num += "\n";
}

console.log(num);
