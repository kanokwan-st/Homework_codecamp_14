const person = ['John', 'Jay', 'Jim', 'Jame'];
person.splice(1, 1, 'Jack', 'Joe'); 
// array.splice(where, how many removed)
console.log(person); // ['John', 'Jack', 'Joe', 'Jim', 'Jame']