//อ่านไฟล์ message.txt แล้วก็อปข้อมูลไปเขียนใน out.txt
var fs = require('fs');
function readMessage() {
    return new Promise(function(fulfill, reject){
        fs.readFile('message.txt', 'utf8', function(err, res){
            if (err) reject(err);
            else fulfill(res);
        });
    });
}
function writeMessage(dat){
    return new Promise(function (fulfill, reject){
        fs.writeFile('out.txt', dat, function(err,res){
            if (err) reject(err);
            else fulfill(res);
        });
    });
}
readMessage().then(data => writeMessage(data)).then(function(){     //ละ data ได้ เหลือ readMessage().then(writeMessage).then( () => console.log('success') );
    console.log('success');
});
