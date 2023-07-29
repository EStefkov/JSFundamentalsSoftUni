function storage(input){
    let storage = new Map();
    for (let line of input){
        let [product, qty] = line.split(' ');
        qty = Number(qty);

        if(storage.has(product)){
            qty+=storage.get(product);
        }

        storage.set(product,qty);

        /*
        if (storage.has(product)){
            let existing = storage.get(product);
            storage.set(product, existing + qty);
        } else{
            storage.set(product, qty);
        }
        */



    }

    for(let [product, qty] of storage){
        console.log(`${product} - > ${qty}`);
    }
}

storage(['tomatoes 10', 'coffe 5','Olivs 100', 'coffe 19']);