let deposite = 100000;
let interest = 0;

for (let i=1; i<=10; i++) {
    interest += 2.5*deposite/100;
    deposite += interest;
}

console.log(deposite);
