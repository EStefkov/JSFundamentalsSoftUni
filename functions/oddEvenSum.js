function oddEvenSum(n) {
    //transform from num to array
    // cheking for odd or even and sum
    let arr = String(n).split("");
    let sumOdd=0;
    let sumEven=0;
    for (let i=0;i<arr.length;i++){
        const numb=Number(arr[i]);
       if(numb%2==0){
        sumEven +=numb;
       }else {
        sumOdd+=numb;
       }
    }
    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;
}
console.log(oddEvenSum(1000435));