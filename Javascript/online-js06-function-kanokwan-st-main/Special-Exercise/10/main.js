function draw(n) {
    let show = '';
    for (i=n; i>=1; i--) {
        for (j=1; j<=n; j++) {
            show += String(j + (n-i)*j);
        }
        show += '\n';
    }
    return console.log(show);
}

draw(3);