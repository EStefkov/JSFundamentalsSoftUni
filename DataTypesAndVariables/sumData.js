function sumDigits(num) {
    // to string;
    // for  -> += char;
    num = num.toString();
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += Number(num.charAt(i));
    }
    console.log(sum);
} sumDigits(245678);