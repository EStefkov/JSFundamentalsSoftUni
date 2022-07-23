function filter_list(l) {
    let arr = new Array;
    for (let i =0; i<l.length;i++){
      let type = typeof(l[i]);
        if (type == 'number'){
            arr.push(l[i]);
        }
    }
    console.log(arr);
  }  filter_list([1, 2, "a", "b"])