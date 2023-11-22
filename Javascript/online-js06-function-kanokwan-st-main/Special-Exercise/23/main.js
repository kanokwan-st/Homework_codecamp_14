//แบ่งตามแนวนอนกับตามแนวตั้ง

function draw(n) {
    let show = '';
    for (i=1; i<=(2*n)-1; i++) {
        for (j=1; j<=(2*n)-1; j++) {

            // ตรงกลาง /////////////////////////////
            if ( (i==n) || (j==n) ) {
                show += '*';
            }

            // ด้านบน /////////////////////////////////
            else if (i<n) {
                if (j<n) { //ฝั่งซ้าย
                    if (i+j<=n) show += '-';
                    else show += '*';
                } else if (j>n) { //ฝั่งขวา
                    if (j-i>=n) show += '-';
                    else show += '*';
                }
                
            } 
            
            // ด้านล่าง //////////////////////////////////
            else if (i>n) {
                if (j<n) { //ฝั่งซ้าย
                    if (i-j>=n) show += '-';
                    else show += '*';
                } else if (j>n) { //ฝั่งขวา
                    if (i+j>=n*3) show += '-';
                    else show += '*';
                }
            }
            
        }
        show += '\n';
    }
    return console.log(show);
}

draw(3);