// p
// array of things including arrays a value to search for
// r true or false if the valuse exists in the array
// e 
// p for thing in array 

let locate = function(arr, value) {
    return arr.flat(Infinity).includes(value)
  
  
  }
  
  console.log(locate(['a', 'b', ['c', 'd', ['e']]], 'e'))