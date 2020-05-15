function findLongestWordLength(str) {
    const arr = str.split(" ")
    let max = 0;
    for(let i in arr){
      if(arr[i].length > max)
        max = arr[i].length;
    }
    return max;
    
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
  