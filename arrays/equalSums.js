function eq(arr){
    
    let isIndex=false;
for (let i=0;i<arr.length;i++){
    let sumL=0;
    let sumR=0;
    if (i !== 0){
        for(let j=0;j<i;j++){
            sumL+=arr[j]
        }
    }
    if(i!==arr.length-1){
        for (let r = i+1; r < arr.length; r++) {
            sumR+=arr[r];
        }
    }
    if(sumL===sumR){
        isIndex= true;
        console.log(i);
    }
}
if(!isIndex){
    console.log('no');
}
}eq([1,2,3])