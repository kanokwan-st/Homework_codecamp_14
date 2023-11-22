function multiplyNumeric(obj, num) {
    let A = Object.keys(obj); //array key ของ object
    let B = Object.values(obj); //array value ของ object

    for (i=0; i<A.length; i++) {
        if ( typeof(B[i]) == 'number' ) {
            obj[ A[i] ] = ( B[i]*num );
        }
    } 

    return obj;
}