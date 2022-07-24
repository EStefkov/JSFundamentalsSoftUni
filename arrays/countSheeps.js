function countSheeps(arrayOfSheep) {
    let counter =0;
    for (let x of arrayOfSheep){
        if(x === true){
        counter++;
        }
    }
   return counter;
    
  } countSheeps ([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true])