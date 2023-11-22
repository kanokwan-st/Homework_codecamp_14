// unsafe
// assigns objects/arrays by reference (ถ้าpush[2,3]ในarr2 ค่าในarrจะเปลี่ยนไปด้วย)
const arr = [1,[2,3], 4]
function clone(arr) {
    const arr2 = arr.map(x => x);
    return arr2;
}



//*******************//
// safely copies deeply nested objects/arrays 
const arrCopy = [1,[2,3], 4]
function clone(arrCopy) {
    const arrCopy2 = JSON.parse( JSON.stringify(arrCopy) );
    return arrCopy2;
}
//JSON.stringify turns an object into a string.
//JSON.parse turns a string into an object.
