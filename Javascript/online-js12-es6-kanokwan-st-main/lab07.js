// Lab 7
// จงเขียนฟังก์ชัน doubleAndReturnArgs โดยรับพารามิเตอร์มาเป็น Array และตัวเลขกี่ตัวก็ได้
// และ return ค่าเป็น Array ที่ประกอบด้วยค่าเดิมในพารามิเตอร์ที่เป็น Array 
// และค่าพารามิเตอร์ที่เป็นตัวเลขคูณสอง


//ใช้ concat (return ค่าเป็น array)
function doubleAndReturnArgs(...args) {
    const result1 = args[0];
    const result2 = (args.slice(1)).reduce((multi,x) => {
        return multi.concat(x*2);
    }, []);
    return result1.concat(result2);
}

doubleAndReturnArgs([5,3,2], 1, 2, 3);





//หรือใช้ push (return ค่าเป็น length)
function doubleAndReturnArgs(...args) {
    const result1 = args[0];
    const result2 = (args.slice(1)).reduce((multi,x) => {
        multi.push(x*2);     //ห้าม return บรรทัดนี้ เพราะได้ค่าเป็นตัวเลข
        return multi;
    }, []);
    return result1.concat(result2);
}

doubleAndReturnArgs([5,3,2], 1, 2, 3);