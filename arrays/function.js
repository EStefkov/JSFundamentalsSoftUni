function likes(names) {
    let emptyStr="";
       if(names.length==1 && typeof(names.lenth!=='number')){
          emptyStr +=`${names[0]} likes this`;
      } else if(names.length==2&& typeof(names.lenth!=='number')){
          emptyStr +=`${names[0]} and ${names[1]} likes this`;
      } else if(names.length==3&& typeof(names.lenth!=='number')){
          emptyStr +=`${names[0]}, ${names[1]} and ${names[2]}likes this`;
      } else if(names.length>3&& typeof(names.lenth!=='number')){
          emptyStr +=`${names[0]} and ${names[1]} and ${names.length-2} others like this"`;
      } else if(names.length<=0 || typeof(names.lenth!=='number')){
         emptyStr +="no one likes this";
      }
    console.log(emptyStr);
    } likes([0]);