//การใช้ Promise เพื่อควบคุม Asynchonus
//พิมพ์ a ก่อนแล้วรอ1วิค่อยพิมพ์ b แล้วรอ1วิค่อยพิมพ์ c แล้วรอ1วิค่อยพิมพ์ d

//วิธีที่ 2 (ดีกว่าแบบแรก)
function showText(text, time) {
    return new Promise( (rs, rj) => {
        setTimeout( () => {
            console.log(text)
            rs()
        }, time)
    })
}

showText('a', 1000)
.then( () => { return showText('b', 1000) } )
.then( () => { return showText('c', 1000) } )
.then( () => { return showText('d', 1000) } )

