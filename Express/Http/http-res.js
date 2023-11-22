//server ส่งresponse กลับไปให่ web browser
const http = require('http')

    //สร้างserver
http.createServer((req, res) => {
    res.writeHead(200,{
        'content-type' : 'text/html',
        'Codecamp' : 'five'
    })    //200 ส่งไปว่าทุกอย่างเรียบร้อยดี
    res.write('This is response message..\n')
    res.write('from your local server')
    res.end('<H2> Good bye </H2>')
}).listen(8080, () => {console.log('Server start...')})     //กำหนดportของserver