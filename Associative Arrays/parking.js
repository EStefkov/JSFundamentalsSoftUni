/*Write function that:

· Records a car number for every car that enters the parking lot

· Removes a car number when the car goes out

· Input will be array of strings in format [direction, carNumber]

Print the output with all car numbers which are in the parking lot sorted in ascending by number

If parking lot is empty , print: "Parking Lot is Empty"
*/

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