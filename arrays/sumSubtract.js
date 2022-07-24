function sum(num){
    let firstSum=0;
    let secondSum=0;
    for (const el of num) {
        firstSum +=el;
    }

    for (let i=0;i<num.length;i++){
        let element= num[i];
        if (element%2==0){
            num[i]+=i;
        }else {
            num[i]-=i;
        }
        secondSum+=num[i];
    }
    console.log(num)
    console.log(firstSum);
    console.log(secondSum)

}sum([5,15,23,56,35])