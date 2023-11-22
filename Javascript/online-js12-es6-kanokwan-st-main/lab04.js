// Lab 4
// จงรวม nums1 และ num2 เข้าด้วยกัน
// จงสร้าง array ที่ได้จากการนำ nums1 และ nums2 มารวมกัน แต่ให้เพิ่ม 5 เข้าไปก่อน nums1 และเพิ่ม -6, -1 เข้าไประหว่าง nums1 กับ nums2
// หาผลรวมของทุก element ใน Array ที่ได้



const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];

nums1.unshift(5);
const nums3 = nums1.concat(-6, -1, nums2);

totalSum = nums3.reduce((sum,x) => sum + x, 0);

console.log(nums3);
console.log(totalSum);




