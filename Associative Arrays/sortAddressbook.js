function sortAdressbook(input){
    let catalog={};
    for (line of input){
        let [name, address] = line.split(':');
        catalog[name] = address;
    }
    //vzimame catalog kolekciqta  i izvlichame spisuk na kluchovete i stoinostite kato massiv
   let sorted = Object.entries(catalog);
   //sortirame kato polzvame sort i znaem che a, i b  sa masivi s  kluch i stoinost 


   // sorted.sort((a,b) => a[0].localCompare(b[0]));
    sorted.sort((a,b) => {
        //zapazvame gi kato promenlivi
        let nameA =a[0];
        let nameB =b[0];
        // vrushtame kato gi sravnqvame 
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