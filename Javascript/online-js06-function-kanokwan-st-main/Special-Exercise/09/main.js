function draw(n) {
    let show = '';
    for (i=2; i<=2*n; i+=2) {
        show += String(i) + '\n';
    }
    return console.log(show);
}

draw(3);
