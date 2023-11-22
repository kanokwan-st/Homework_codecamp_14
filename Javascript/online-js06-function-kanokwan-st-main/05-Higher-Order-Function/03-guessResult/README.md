ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

```js
function makeWorker() {
  let name = 'Pete'; // Local Variable
  return function () {
    alert(name);
  };
}
let name = 'John'; // Global Variable
let work = makeWorker();
work(); // * Pete เพราะ Local Variable สำคัญกว่า Global Variable
```