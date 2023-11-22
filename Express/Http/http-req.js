//web browser ส่งrequest มาให้ server แล้ว serverนำข้อมูลไปใช้งานต่อ

const http = require('http')
const server = http.createServer()      //สร้างobjsctที่ชื่อserver

//ถ้าเกิดเหตุการณ์ชื่อrequest ที่serverให้ทำอะไรต่อ
server.on('request', (req, res) => {
    let {httpVersion, method, url} = req

    console.log(req.headers)
    console.log(httpVersion)
    console.log(method)
    console.log(url)
} )

server.listen(8080)