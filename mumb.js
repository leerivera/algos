function accum(s) {
  
    let result = "";
    
    // Iterate through each
    for (let i = 0; i < s.length; i++) {
      // Append the character to the result string, capitalized and repeated
      // the number of times equal to its index in the string (plus 1)
      result += s[i].toUpperCase() + s[i].toLowerCase().repeat(i);
      
      // Add a dash after each character, except for the last one
      if (i < s.length - 1) {
        result += "-";
      }
    }
    
    return result;
  }