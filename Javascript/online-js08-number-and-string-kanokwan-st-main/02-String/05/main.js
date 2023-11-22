function truncate(str, length) {
    if (str.length <= length) return str;
    else {
        return str.slice(0,length) + '...';
    }
}

truncate("What I'd like to tell on this topic is:", 20); // What I'd like to tel…
truncate("Hi everyone!", 20); // Hi everyone!