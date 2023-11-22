draw = (n) => {
    let star = '';
    for (i=1; i<=n; i++) {
        for (j=1; j<=n; j++) {
            star += String(j + n*(i-1));
        }
        star += '\n';
    }
    return console.log(star);
}

draw(3);