const nums = [-3, 2, 11, -7, 4, 6];

const nums2 = nums.reduce(
    (multiply, currentValue) => {
        return multiply * currentValue
}, 1);

console.log(nums2);