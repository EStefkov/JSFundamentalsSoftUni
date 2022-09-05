let words = ['nest','Eggs','bite','Grip','JAw'];
console.log(words.sort());
console.log(words.sort((a,b) => a.localeCompare(b)));
let nums = [20,40,10,30,100,5];
nums.sort((a,b) =>a-b);
console.log(nums.join(' ')); 