const { log } = require('console');
let fs = require('fs');

let dataAsString = fs.readFileSync('./web/data.json', 'utf-8');
 let data = JSON.parse(dataAsString)
console.log(data.name);
console.log(data.age);
console.log(data.position);
fs.writeFileSync('./web/data2.json', JSON.stringify(data, null, 2), 'utf-8');