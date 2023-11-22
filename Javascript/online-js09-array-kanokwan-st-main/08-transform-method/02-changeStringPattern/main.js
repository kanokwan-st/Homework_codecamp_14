function tranformWord(word) {
    const arr = word.split("-");
    let result = '';
    arr.forEach(element => {
        result += element.slice(0,1).toUpperCase();
        result += element.slice(1).toLowerCase();
    });
    return result.slice(0,1).toLowerCase() + result.slice(1);
}

tranformWord("go-to-school");