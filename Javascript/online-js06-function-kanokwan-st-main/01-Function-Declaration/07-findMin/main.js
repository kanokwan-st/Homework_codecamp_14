function max() {
    let maxNum = 0;

    if (arguments.length == 0) maxNum = undefined;
    else {
        for (let i=0; i < arguments.length && i < 4; i++) {
            if (arguments[i] > maxNum) maxNum = arguments[i];
            else if (isNaN(arguments[i])) maxNum = NaN;
        }
    }
    
    return maxNum;
    }











// Write a function that accepts any number of arguments
// function add() {
//     console.log(arguments);
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }