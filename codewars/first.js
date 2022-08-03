/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
*/
function createPhoneNumber(arr) {
    let sum="";
    let secondDigits="";
     let lastDigits="";
    for (let i = 0; i < arr.length; i++) {
        if (i >= 0 && i <= 2) {
            sum = sum + arr[i];
        }else if(i>=3 && i<=5){
            secondDigits += arr[i];
        }else{
            lastDigits+=arr[i];
        }
    }
    return(`(${sum}) ${secondDigits}-${lastDigits}`);

}createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])