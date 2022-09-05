function process(inputArr) {
    let result = [];
    for(const num of inputArr){
        if(num<0){
            result.unshift(num);
        }else {
            result.push(num);
        }
    }
   return result.join('\n');
}
console.log(process([7,-2,8,9]))