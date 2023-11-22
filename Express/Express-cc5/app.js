const express = require('express')
const app = express()

const userRoute = require('./userRoute')
app.use('/user', userRoute)

// app.use(express.static('./public'))   //ทำให้สามารถเรียกไฟล์ใน folder public มาใช้งานได้เลย (http://localhost:3000/form1.html)
app.use('/pub', express.static('./public'))   //ตั้งชื่อเล่นได้ (http://localhost:3000/pub/form1.html)
app.get('/', (req, res) => {
    res.redirect('/pub/form1.html')
})

app.listen(3000, () => console.log('Server Start...'))