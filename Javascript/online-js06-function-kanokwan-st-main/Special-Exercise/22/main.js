function draw(n) {
    let show = '';
    for (i=1; i<=n; i++) {
        for (j=1; j<=(2*n)-1; j++) {
            if (j<n) {
                if (i>j) show += '-';
                else show += '*';
            } else if (j==n) {
                show += '*';
            } else if (j>n) {
                if (i+j >= (2*n)+1) show += '-';
                else show += '*';
            }
            
        }
        show += '\n';
    }
    return console.log(show);
}

draw(3);