function frankenSplice(arr1, arr2, n) {
    
    const arr = arr2.slice()
    arr.splice(n, 0, ...arr1);
    return arr;
}
  
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
  