//การใช้ Promise เพื่อควบคุม Asynchonus
//พิมพ์ a ก่อนแล้วรอ1วิค่อยพิมพ์ b แล้วรอ1วิค่อยพิมพ์ c แล้วรอ1วิค่อยพิมพ์ d
//วิธีที่ 1
console.log('a')                //พิมพ์ a
new Promise( resolve => 
    setTimeout( () => {
        console.log('b')        //พิมพ์ b
        resolve()
    }, 1000) ).then( () => {
    new Promise( resolve =>
        setTimeout( () => {
        console.log('c')        //พิมพ์ c
        resolve()
    }, 1000) ).then( () => {
    setTimeout( () => {
        console.log('d')        //พิมพ์ d
    }, 1000 )
        })
    })


