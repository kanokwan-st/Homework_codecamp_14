function draw(n) {
    show = '';
    for (i=0; i<n; i++) {
        show += String(2*i) + '\n';
    }
    return console.log(show);
}

draw(3);