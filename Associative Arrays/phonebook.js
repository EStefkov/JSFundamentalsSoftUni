function solve(input) {
    let phonebook={};
    //repeat for each element
    for (let line of input){
        //parse input string
        // let [name, phone] =line.split(' '); 

        let tokens = line.split(' ');
        let name = tokens[0];
        let phone = tokens[1];
        //store in collection
        phonebook[name] = phone;
    }
    
    //print result
    for (let key in phonebook){
        console.log(`${key} -> ${phonebook[key]}`);
    }
    console.log(phonebook);
    for (let [name, phone] of Object.entries(phonebook)){
        console.log(name, phone);
    }
}


solve(['Tim 083435235',
'Peter 21312315',
'Bill 06352352',
'Tim 0799943543']);