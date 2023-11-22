draw = (n) => {
    let star = '';
    for (i=0; i<n; i++) {
        for (j=0; j<n; j++) {
            star += String(n*(n-i) - j);
        }
        star += '\n';
    }
    return console.log(star);
}

draw(3);