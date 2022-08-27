function sumAndSub(x, y, z) {
    /* function sum (a,b){
         return a+b;
     }
     let result = sum(x,y);
     return result - z;
     */
    let sum = (a, b) => a + b;
    return sum(x, y) - z;
}
console.log(sumAndSub(23, 6, 10))