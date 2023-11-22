//แบ่งตามแนวนอนกับตามแนวตั้ง

function draw(n) {
    let show = '';
    let a = 1;
    for (i=1; i<=(2*n)-1; i++) {
        for (j=1; j<=(2*n)-1; j++) {

            // ตรงกลาง /////////////////////////////
            if ( (i==n) || (j==n) ) {
                show += String(a++);
            }

            // ด้านบน /////////////////////////////////
            else if (i<n) {
                if (j<n) { //ฝั่งซ้าย
                    if (i+j<=n) show += '-';
                    else show += String(a++);
                } else if (j>n) { //ฝั่งขวา
                    if (j-i>=n) show += '-';
                    else show += String(a++);
                }
                
            } 
            
            // ด้านล่าง //////////////////////////////////
            else if (i>n) {
                if (j<n) { //ฝั่งซ้าย
                    if (i-j>=n) show += '-';
                    else show += String(a++);
                } else if (j>n) { //ฝั่งขวา
                    if (i+j>=n*3) show += '-';
                    else show += String(a++);
                }
            }
            
        }
        show += '\n';
    }
    return console.log(show);
}

draw(3);