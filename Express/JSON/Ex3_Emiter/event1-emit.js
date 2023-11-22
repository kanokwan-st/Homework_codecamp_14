//อยากแยก emit event ให้อยู่คนละไฟล์ กับฝั่งตรวจสอบและรับ ต้องสร้างเป็นclass

const EventEmitter = require('events')

        //ตัว extends บอกว่า Em1 เป็น classลูกของ EventEmitter
class Em1 extends EventEmitter {
    emit1() {
        setInterval( () => this.emit('onesec', 11111), 1000)
    }
    emit2() {
        setInterval( () => this.emit('twosec', 22222), 2000)
    }
}

module.exports = Em1