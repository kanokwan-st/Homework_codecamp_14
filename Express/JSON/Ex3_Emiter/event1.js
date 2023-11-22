const EventEmitter = require('events')
const em1 = new EventEmitter()
                        //  ชื่อEvent,       parameter,           ทำทุกกี่วิ
setInterval( () => em1.emit('onesec',{id:1, txt:'One Second..'}), 1000) 
setInterval( () => em1.emit('twosec'), 2000)

//ทำEventชื่อนี้     //รับ parameter มาใช้งาน
em1.on('onesec', (e) => {
    console.log(e.id + ' = ' + e.txt)
})

// em1.on('twosec', () => {
//     console.log('two...')
// })