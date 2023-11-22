function draw(n) {
    let show = '';
    let a = 1;
    for (i=1; i<=(2*n-1); i++) {
        for (j=1; j<=n; j++) {
            if (i<n) {
                if (i+j<=n) show += '-';
                else show += String(a++);
            } else if (i==n) {
                show += String(a++);
            } else if (i>n){
                if (i-n >= j) show += '-';
                else show += String(a++);
            }

        }
        show += '\n';
    }
    return console.log(show);
}

draw(3);