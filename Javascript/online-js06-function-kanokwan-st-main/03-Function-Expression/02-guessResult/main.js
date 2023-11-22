const showModal = alert; 
showModal("Execute modal"); // * alert คำว่า Execute modal เพราะให้ showModal เท่ากับ function alert



const showModal = alert();
showModal("Execute modal"); // ** error