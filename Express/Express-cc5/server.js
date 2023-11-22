const express = require('express')
const app = express()

app.get('/', (req, res)=> {
    res.send("Hello form Express")
})
app.get('/user', (req, res) => {
    res.send("User Page from Express")
})

app.listen(3000, ()=>console.log('Express server start..'))




//.....วิธีเดิม..........//

const http = require('http')
const server = http.createServer()

//ถ้ามี request เข้ามา
server.on('request', (req, res) => {
    if(req.url === '/')
    res.end('Hello from HTTP-NodeJS')
    if(req.url === '/user')
    res.end('This is user page')
})
server.listen(8080, ()=>console.log('HTTP Server start..8080'))