const persons = [
  { name: 'John', sex: 'M' },
  { name: 'Jody', sex: 'M' },
  { name: 'Susan', sex: 'F' },
  { name: 'Kate', sex: 'F' },
  { name: 'Sid', sex: 'M' }
];
// expexted result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }

f = new Array();
m = new Array();

const gerderGroup = persons.reduce((group,x) => {
    if (x.sex == 'F') {
        f.push(x.name);
        group.F = f;
    }
    else if (x.sex == 'M') {
        m.push(x.name);
        group.M = m;
    }
    return group;
}, {})

console.log(gerderGroup);