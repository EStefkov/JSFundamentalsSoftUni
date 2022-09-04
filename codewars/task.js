function removeSmallest(numbers) {
    let maxsafe = Number.MAX_SAFE_INTEGER;
    let currentSmall=[];
    let smallest = true;
    currentSmall=numbers.push();
    for(let i=1;i<numbers.length;i++){
        while(smallest){
        if(currentSmall> numbers[i]){
            currentSmall= numbers[i];
            smallest=flase;
        }
    }
    }
    console.log(currentSmall);

  } removeSmallest([5,3,2,1,4])