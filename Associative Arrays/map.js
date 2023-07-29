let myMap = new Map();

myMap.set('Tim', '+359-897-5462');
myMap.set('Kiril', '+359-897-5869');
myMap.set('Peter', '+359-893-5522');

//  suzdavame massiv ot kluchovete 
// let keys = [...myMap.keys()];
let arrKeys = Array.from(myMap.keys());

let keys = myMap.keys();

for (let key of keys){
    console.log(key);
}

console.log("-------------------------");

let values = myMap.values();

for (let value of values){
    console.log(value);
}

console.log("-------------------------");

for (let entry of myMap){
    console.log(entry);
}
console.log("-------------------------");

console.log(myMap.has('Kiril'));

console.log(myMap.get('Kiril'));

myMap.delete('Kiril');

console.log(myMap.has('Kiril'));