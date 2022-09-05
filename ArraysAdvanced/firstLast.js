function firstLast(inputArr){
    let first = Number(inputArr[0]);
    let last = Number(inputArr.pop());
    return first+last;
}
console.log(firstLast(['5','10']));