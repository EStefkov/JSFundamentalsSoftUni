function polindrome(arr) {
    // checking numbers one by one  to see who is polindrome
    // prints true or false as strings
    let result = '';
    for (let num of arr) {
        let isPolindrome = 'true';
        num = String(num);
        let mid = parseInt(num.length / 2);
        for (let i = 0; i <= mid; i++) {
            let lastDigit = num.length - 1;
            if (num[i] !== num[lastDigit - i]) {
                isPolindrome = 'false';
                break;
            }
        }
        result += isPolindrome + '\n';
    }
    return result;
}
console.log(polindrome([123, 323, 421, 121]))