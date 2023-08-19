function solve(words, str){
    words = words.split(', ');
    
    for (const word of words) {
        let starsStr = '*'.repeat(word.length);
        let isItLast = str.lastIndexOf(starsStr);
        while (isItLast>0){
        str = str.replace(starsStr, word);
        isItLast = str.lastIndexOf(starsStr);
    }
    }
    console.log(str);

}
solve('great', 'softuni is ***** place for learning ***** new ****** programming ***** leanguages');