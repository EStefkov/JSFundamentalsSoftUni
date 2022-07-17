function replace(str, char, result) {
    let res = str.replace('_', char);
    let output = res === result ? "Matched" : "NotMatched";
    console.log(output);
}replace('Str_ng', 'i', 'String')