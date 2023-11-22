const express = require('express')
const app = express()
const fs = require('fs')

let data = JSON.parse(fs.readFileSync('./sample.json'))     //แปลง JASON เป็น object
let users = data.users
let listcounter = 0

// Middleware ดักหน้า (ทำอันนี้ก่อนค่อยทำตัวถัดไป)
app.use('/list', (req, res, next) => {
    listcounter++
    console.log('Request to /list number:' + listcounter)
    next() //ถ้าไม่ใส่จะไม่ทำอันล่างต่อ
})

//ทำหลังอันบน
app.get('/list', (req, res) => {
    res.send(users)
})

app.get('/search', (req, res) => {
    res.send(users.find( x => x.firstName === req.query.uname ))        //    /search?uname=racks
})

app.get('/users/:id', (req, res) => {
    res.send(users[parseInt(req.params.id) - 1])    //เอาข้อมูลตัวที่ id (parseInt คือแปลงเป็นตัวเลข)
})

app.get('/username/:uname', (req, res) => {
    res.send(users.find( x => x.firstName === req.params.uname ))
})


app.get('/listname',  (req, res) => {
    let outHTML = '<ol>'
    users.forEach( x=> {
        outHTML += `<li> ${x.firstName} ${x.lastName} <b> ${x.emailAddress}</b> </li>`
    })
    outHTML += '</ol>'
    res.send(outHTML)
})

app.listen(3000, ()=>console.log('server start..') )