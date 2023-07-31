function wordsTracker(input){
    let words=input.shift().split(' ');
    
    let wordsObj ={};
    for (const word of words) {
        wordsObj[word] = 0;
    }
    for (const word of input){
        if(wordsObj.hasOwnProperty(word)){
            wordsObj[word]++;
        }
    }
     Object.keys(wordsObj)   //['this', 'sentence']
     .sort((a,b) => wordsObj[b]-wordsObj[a]) 
     .forEach(el =>{
        console.log(`${el} - ${wordsObj[el]}`);
    })

}

wordsTracker(['this sentence','In','this','sentence','you', 
'have', 'to','count','the','occurances','and','sentence',
'beacuse','this','is','your','task', 'this'])