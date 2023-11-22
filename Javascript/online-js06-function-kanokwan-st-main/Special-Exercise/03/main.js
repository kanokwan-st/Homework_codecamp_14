function draw(n) {
    let show = '';
    for (i=1; i<=n; i++) {
        for (j=1; j<=n; j++) {
            show += String(j);
        }
        show += '\n';
    }
    return console.log(show);
}

draw(3);