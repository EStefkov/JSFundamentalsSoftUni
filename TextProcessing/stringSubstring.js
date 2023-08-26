function solve(word,str){
    str = str.toLowerCase().split(' ');

if(str.includes(word.toLowerCase())){
    console.log(word);
} else {
    console.log(`${word} is not found!`);
}
}
solve('javascript',

'JavaScript is the best programming language')