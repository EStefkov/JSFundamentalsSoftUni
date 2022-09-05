function processOdd(arr) {
    /*console.log(arr
        .filter((v, i) => (i % 2) == 1)
        .map(x => x * 2)
        .reverse());*/
    let filtered = arr.filter((v, i) => (i % 2) == 1);

    let doubled = filtered.map(x => x * 2);
    console.log(doubled.reverse());

/*let filtered = arr.filter(isOddIndex);

let doubled = filtered.map(x => x * 2);

console.log(doubled.reverse());
}
function isOddIndex(value, index) {
return (index % 2) == 1;
 */
}

processOdd([10, 15, 20, 25]);