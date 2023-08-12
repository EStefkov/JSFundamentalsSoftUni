function park(input) {

    let parking = {};

    for (const line of input) {
        
        let [direction, carNumber]= line.split(', ');

        if (direction == 'IN'){
            parking[carNumber]=1;
        }else {
            delete parking[carNumber];
        }
    }

    return Object.keys(parking).sort((a,b) => a.localeCompare(b)).join('\n');
    
}
console.log(
park(['IN, CA282842',
'IN, TX2345',
'OUT, CA282842',
'IN, CA9999TT',
]));