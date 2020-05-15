function factorialize(num) {
    let p = 1
    while(num > 0){
        p *= num;
        num--;
    }
    return p
}

console.log(factorialize(5));
