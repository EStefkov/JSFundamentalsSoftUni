function sound(){
console.log(`vroom`);
}
let myObj = {
    make : "Porche",
    model : "911",
    color : "Blue"

}
myObj.makeSound=sound;
console.log(Object.entries(myObj));
console.log(Object.values(myObj));
console.log(Object.keys(myObj));
console.log(Object.call(myObj));
console.log(Object.assign(myObj));

let objKeys=Object.keys(myObj);
for (const key of objKeys) {
    console.log(`Key = ${key} \n Value = ${myObj[key]}`);
}