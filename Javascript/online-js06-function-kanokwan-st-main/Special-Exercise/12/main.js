function draw(n) {
    let show = '';
    for (i=1; i<=n; i++) {
        for (j=n; j>=1; j--) {
            if (j==i) show += '-';
            else show += '*';
        }
        show += '\n';
    }
    return console.log(show);
}

draw(3);