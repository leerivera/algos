function repeats(arr){
    //arr -> filter single values -> reduce
    //index of num is last index of num

    return arr.filter(n => arr.indexOf(n) === arr.lastIndexOf(n).reduce((a,c)=> a + c, 0))
}

console.log(repeats([4,5,7,5,4,8]), 15)