function draw(n) {
    let show = '';
    for (i=1; i<=(2*n-1); i++) {
        for (j=1; j<=n; j++) {
            if (i<n) {
                if (i<j) show += '-';
                else show += '*';
            } else if (i==n) {
                show += '*';
            } else if (i>n){
                if (i+j-n > n) show += '-';
                else show += '*';
            }

        }
        show += '\n';
    }
    return console.log(show);
}