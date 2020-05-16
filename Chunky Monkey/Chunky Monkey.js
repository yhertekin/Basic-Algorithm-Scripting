function chunkArrayInGroups(arr, size) {
    
    const arrReturn = []
    for(let i = 0; i < arr.length; i+=size){
        arrReturn.push(arr.slice(i, i+size));
    }
    return arrReturn;
}
  
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
  