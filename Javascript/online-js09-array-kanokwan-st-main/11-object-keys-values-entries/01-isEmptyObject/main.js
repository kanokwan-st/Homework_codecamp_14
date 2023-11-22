function checkEmptyObj(obj) {
    return (Object.keys(obj).length == 0 && obj.constructor == Object) 
}

console.log( checkEmptyObj({}) );
console.log( checkEmptyObj({a: 1, b: 2}) );
console.log( checkEmptyObj('abc') );

