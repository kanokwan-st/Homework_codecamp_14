let arr = ['React', 'Vue', 'Angular'];

function copySorted(arr) {
    let arr1 = JSON.parse(JSON.stringify(arr)); //copy array
    const sorted = arr1.sort();
    return sorted;
}

let sorted = copySorted(arr);

console.log(sorted); // Angular, React, Vue
console.log(arr); // React, Vue, Angular (no changes)