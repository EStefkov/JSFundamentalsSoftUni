function charInRange(first, second) {
    //translate symbols in ascii 
    // we watch carefull wich is first
    //print on lane every symbols between first and second
    let firstCode = first.charCodeAt();
    let secondCode = second.charCodeAt();
    /*
    let start = Math.min(firstCode,secondCode);
    let end = Math.max(firstCode,secondCode);
    */
    let start = firstCode < secondCode ? firstCode : secondCode;
    let end = firstCode > secondCode ? firstCode : secondCode;
    let line='';
    for (let i=start+1;i<end;i++){
        line += String.fromCharCode(i)+' ';
    }
    return line;
}
console.log(charInRange('a', 'd'))