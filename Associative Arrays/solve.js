function solve(str){

    let arrStr = str.split(' ');
    
    let occurances = new Map();

    for (let word of arrStr) {
        word = word.toLowerCase();
        if( !occurances.has(word)){
            occurances.set(word,0)
        } 
            occurances.set(word, occurances.get(word) + 1);
    }
    let keys = Array.from(occurances.keys()).filter(x => occurances.get(x) % 2 !==0).join(' ');
    console.log(keys);
}

solve('Java C# Php JAVA PhP 3 C# 3 1 5 C#');