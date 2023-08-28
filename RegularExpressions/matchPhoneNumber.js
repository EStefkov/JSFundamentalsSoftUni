function solve([input]){
    let pattern = /\+359([ ,-])2\1\d{3}\1\d{4}\b/g;
    let smatch = input.match(pattern);
    let match = pattern.exec(input);
    console.log(match);
    console.log(smatch);


}
solve(['359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-2222'])