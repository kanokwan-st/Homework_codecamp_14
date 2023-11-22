// แบบแรก
// const http = require('http')
// const server = http.createServer()

// server.on('request', (req, res) => {
//     console.log('request coming..')
//     res.writeHead(200, {'Content-type' : 'text/html'})
//     res.write('Hello, world')
//     res.end()
// })

// server.listen(8080)      //รอคนติดต่อเข้ามา

//แบบสอง
// const http = require('http')
// http.createServer( (req, res) => {
//     console.log('request coming..')
//     res.writeHead(200, {'Content-type' : 'text/html'})
//     res.write('Hello, world')
//     res.end()
// }).listen(8080)

//แบบสาม
const http = require('http')

function app(req,res) {
    console.log('request coming..')
    res.writeHead(200, {'Content-type' : 'text/html'})
    res.write('Hello, world')
    res.end()
}
http.createServer(app).listen(8080)
