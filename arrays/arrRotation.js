function rotation(arr,num){
    
    for(let i=0;i<num;i++){
        const el = arr.shift();
        arr.push(el);

    }
    console.log(arr.join(" "));
}rotation([51, 47, 32, 61, 21], 2)