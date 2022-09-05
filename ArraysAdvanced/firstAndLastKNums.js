function firstAndLast(arr){
    let firstEl = arr.shift();
    let firstK=arr.slice(0,firstEl);
    let lastK=arr.slice(-firstEl);
    console.log (firstK.join(" "));
    console.log(lastK.join(" "));
    console.log (firstEl);
}
console.log(firstAndLast([2,7,8,9]));