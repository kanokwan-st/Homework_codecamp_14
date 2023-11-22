const state1 = { username: 'john', point: 100, loading: true };

const state2 = new Object();
Object.assign(state2, state1);  //ก๊อปค่า state1 มาใส่ใน state2
state2.loading = false;
state2.success = true;

console.log(state1);
console.log(state2);