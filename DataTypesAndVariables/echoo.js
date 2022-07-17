function echo(input) {
    let myInput = typeof (input);
    if (myInput === 'string' || myInput === 'number') {
        console.log(myInput);
        console.log(input);
    } else {
        console.log(myInput);
        console.log('Parameter is not suitable for printing');
    }
} echo(null)