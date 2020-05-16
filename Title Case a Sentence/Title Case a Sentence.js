function titleCase(str) {
    str = str.toLowerCase().split(' ');
    let strReturn = [];
    for(let word of str){
      strReturn.push(word[0].toUpperCase() + word.slice(1, word.length))
    }
    return strReturn.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
  