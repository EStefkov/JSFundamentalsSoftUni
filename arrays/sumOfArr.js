function sum (numbers) {
    let sum=0;
for (let i=0;i<numbers.length;i++){
    if(typeof numbers[i]=='number'){
    sum +=numbers[i];
    } else {
        sum+=0;
    }
} 
return sum;
} sum ([1, 5.2, 4, 0, -1,"dsada "])