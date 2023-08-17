function solve(text,word){
    let matcher = ` ${word} `;
    let index = text.indexOf(matcher);

    let count =0;

    while (index != -1 ){
        count++;

        index = text.indexOf(matcher, index+ matcher.length);
    }
    if(text.startsWith(word)){
        count++;
    }
    if(text.endsWith(word)){
        count++;
    }
    console.log(count);

} solve('is This is a word and it also is a sentence is', 'is');