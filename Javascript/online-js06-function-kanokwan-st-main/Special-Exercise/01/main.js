function draw(n) {
    let star = '';
    for (i=1; i<=n; i++) {
        star += '*';
    }
    return console.log(star);
}

draw(3);