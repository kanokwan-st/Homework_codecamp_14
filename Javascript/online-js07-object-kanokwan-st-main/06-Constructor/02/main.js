function Accumulator(startingValue) {
    return {
        currentValue: startingValue,
        read: function () {
            let input = +prompt('Put number');
            this.currentValue += input; //เรียกค่าใน object ต้องใช้ this
        },
        show: function () {
            alert(this.currentValue); //เรียกค่าใน object ต้องใช้ this
        }
    }
}

const a = Accumulator(2);
a.read();
a.show();