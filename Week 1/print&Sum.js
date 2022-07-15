function print(start,end){
    let sum=0;
    let empty ='';
    for(let i=start;i<=end;i++){
        empty+=i + " ";
        sum+=i;
    }
    console.log(empty);
    console.log(`Sum: ${sum}`);
}print(0,26)