// given a string of chars write a func that returns it with chars reversed no reverse method 

//str -> char
//str -> str rev

function reverseString(str) {
    // return str.split('').reverse().join('')
  
    let reverseStr = ""
    for (let char of str){
      // reverseStr = char + reverseStr
      reverseStr = reverseStr + char
      //order determines if its reversed 
    }
  
    return reverseStr
    
  }
  
  console.log(reverseString('dogs'), 'sgod')