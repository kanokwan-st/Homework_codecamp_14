const http = require('http');
const fs = require('fs')

let postHTML = fs.readFileSync('./formpost.html')

http.createServer( (req, res) => {
    let body = ''   //ข้อมูลทั้งหมดที่เข้ามา
    //รับ data มาทีละ chunk (รับมาทีละนิด แล้วเอามารวมกันใน body)
    req.on('data', (chunk) => {
        body += chunk
    } )
    //พอรับมาครบให้ทำข้างล่าง
    req.on('end', () => {
        body = decodeURI(body)
        console.log('Body :' + body);
        res.writeHead(200)  //บอกว่าเสร็จแล้ว
        res.write('<p>'+body+'</p><hr>')
        res.end(postHTML)
    })
}).listen(8080, () => console.log('Server Start...'))