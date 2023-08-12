/* There is a party at SoftUni. Many guests are invited and they are two types: VIP and regular. When guests come to the party check if he/she exists in any of the two reservation lists.

The input will come as array of strings. You will be given the list with the guests before you receive a command "PARTY"

All VIP numbers start with digit

When you receive the command "PARTY" the guests start coming.

Print the count of guests then all guest, who didn't come to the party (VIP must be first)
*/
function party(arr){
    let list ={
        'VIP': [],
        'regular': []
    }

    let name = arr.shift();

    while(name !== 'PARTY'){
        let char= name[0]
        if (isNaN(char)){
            list['regular'].push(name);
        }else {
            list['VIP'].push(name);
        }
        name = arr.shift();
    } 

    arr.forEach(name => {
        if(list['VIP'].includes(name)){

            let i = list['VIP'].indexOf(name);

            list['VIP'].splice(i,1);

        }else if (list['regular'].includes(name)){

            let i = list['regular'].indexOf(name);

            list['regular'].splice(i,1);

        }
        
    })

    console.log(list['VIP'].length + list['regular'].length);
    
   console.log(list['VIP'].join('\n') + '\n' + list['regular'].join('\n'));
}

party(['7IK9Yo0h',

'9NoBUajQ',

'Ce8vwPmE',

'SVQXQCbc',

'tSzE5t0p',

'PARTY',

'9NoBUajQ',

'Ce8vwPmE',

'SVQXQCbc'

])