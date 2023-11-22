const mu = require('./myUtil')     //เพื่อใช้ตัวแรนดอม

class Human {
    constructor(name, age=mu.getRandom(20, 50)) {
        this.name = name
        this.age = age
    }
    info() { console.log(this.name, this.age)}      //method
}

module.exports.Human = Human
