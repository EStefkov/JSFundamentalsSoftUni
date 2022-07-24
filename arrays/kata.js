function solution(a,b){
    let arr=[];
    for (let i=0;i<a.length;i++){
        if (a[i] !== b[0]){
            arr.push(a[i]);
        }
    }
    console.log(arr);
}solution([1,2,2,2,3],[2]);