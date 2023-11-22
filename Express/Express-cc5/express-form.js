const express = require('express')
const app = express()
const fs = require('fs')

let data = JSON.parse(fs.readFileSync('./sample.json'))
users = data.users

app.get('/search', (req, res) => {
    let formHTML = `
    <!DOCTYPE html>
    <head>
        <meta charset="UTF-8">
    <body>
        <form action="/dosearch" method="GET">
            <label for="firstname">First Name</label>
            <Input type="text" name="firstname" placeholder="First Name"></Input>
            <input type="submit">
        </form>
    </body>
    </html> 
    `
    res.send(formHTML)
})

app.get('/dosearch', (req, res) => {
    res.send(users.filter( x => x.firstName.includes(req.query.firstname)))     //filter มากกว่า 1 คนได้ (ถ้า find คนเดียว)
})

app.listen(3000, () => console.log('Server Start...'))