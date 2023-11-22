function draw(n) {
    let show = '';
    for (i=1; i<=n; i++) {
        for (j=1; j<=n; j++) {
            if (j==i) show += '-';
            else show += '*';
        }
        show += '\n';
    }
    return console.log(show);
}

draw(3);