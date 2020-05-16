function repeatStringNumTimes(str, num) {
    let strReturn = ""
    while(num-- > 0){
      strReturn += str;
    }
    return strReturn;
}
  
console.log(repeatStringNumTimes("abc", 3));
  