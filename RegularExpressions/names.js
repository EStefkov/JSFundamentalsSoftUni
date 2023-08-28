function solve(text){
let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
let match = pattern.exec(text);
while(match != null){
    console.log(match[0]);
    match = pattern.exec(text);
}

}
solve('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov,Ivan     Ivanov,Test Testov');