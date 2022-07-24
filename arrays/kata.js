function solution(a,b){
    let arr=[];
    for(const el of a){
        let isCommon = b.includes(el);
        if(!isCommon){
            arr.push(el);
        }
    }
    console.log(arr);
}solution([1,2,2,2,3],[1,2]);
