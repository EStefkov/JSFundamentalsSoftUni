function sortAdressbook(input){
    let catalog={};
    for (line of input){
        let [name, address] = line.split(':');
        catalog[name] = address;
    }
   let sorted = Object.entries(catalog);
    sorted.sort((a,b) => {
        let nameA =a[0];
        let nameB =b[0];
        return nameA.localeCompare(nameB);
    })
    for (let name in catalog){
        console.log(`${name} -> ${catalog[name]}`);
    }
    
    for(let [name,address] of sorted){
        console.log(`${name} ------> ${address}`);
    }
}

sortAdressbook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:OrneryRd'])