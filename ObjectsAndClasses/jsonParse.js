function jsonParse(objectAsString){
    let parseedObject = JSON.parse(objectAsString);
    
    for (const key of Object.keys(parseedObject)) {
        console.log(`${key} : ${parseedObject[key]}`);
    }
}
let input = `{"name" : "Georgi", "age" : 30, "Town": "Sofia"}`;
jsonParse(input);