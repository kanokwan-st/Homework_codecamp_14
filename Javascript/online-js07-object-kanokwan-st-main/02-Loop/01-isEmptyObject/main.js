function isEmptyObject(obj) {
    if (Object.keys(obj).length === 0 && obj.constructor === Object) {
        console.log("Object ว่าง");
    }
    else console.log("ไม่ใช่ Object ว่าง")
}