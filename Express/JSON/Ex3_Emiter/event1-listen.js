const Em1 = require('./event1-emit') //Em1 มาในฐานะclass
const em1 = new Em1()   //em1 คือ instance

em1.emit1()

em1.on('onesec', (e) => {
    console.log(e)
})