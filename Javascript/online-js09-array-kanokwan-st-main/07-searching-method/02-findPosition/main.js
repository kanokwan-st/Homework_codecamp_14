const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
const arr1 = new Array();

for (i=0; i<alphabets.length; i++) {
    // ถ้าไม่เท่ากับ-1(มี 'a' ใน alphabets) และยังไม่มีค่า index ในarr1
    if (alphabets.indexOf('a',i) != -1 && !arr1.includes(alphabets.indexOf('a',i)) ) {
        arr1.push( alphabets.indexOf('a',i) );  //ให้เก็บค่า index ใน arr1
    }
}
