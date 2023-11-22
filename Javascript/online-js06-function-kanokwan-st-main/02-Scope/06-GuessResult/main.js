const sender = 'Matt';

function sendTo(from, to) {
    console.log(`From ${from} to ${to}`);
}

sendTo(sender, 'Sarah'); // * From Matt to Sarah เพราะเอาค่ามาจากด้านบน
sendTo(null); // ** From null to undefined เพราะใส่ค่า null ตัวเดียว



const sender = 'Matt';

function sendTo(to, from = 'CC') {
    console.log(`From ${from} to ${to}`);
}

sendTo('Max'); // *** From CC to Max เพราะมีกำหนดค่า default ของ from
sendTo('Ben', 'Jay'); // **** From Jay to Ben เพราะเอาค่ามาจากในวงเล็บ ที่รับค่าสลับกัน