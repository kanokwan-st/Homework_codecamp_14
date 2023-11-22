let ans = "";

for (let m=2; m<=12; m++) {
    for (let n=1; n<=12; n++) {
        ans += (`${m} x ${n} = ${m*n}`);
        ans += "\n";
    }
    ans += "\n";
}

console.log(ans);