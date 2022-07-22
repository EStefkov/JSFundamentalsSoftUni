function reverse(num,arr){
    let partialArr =[];
    for (let i=0; i<num;i++){
        partialArr.push(arr[i]);
    }
    let res="";
    for(let i=partialArr.length-1; i>=0;i--){
        res += partialArr[i];
        res +=" ";
    }
    console.log(res);
}reverse (2,[66,43,75,89,47])