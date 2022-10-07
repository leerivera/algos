// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}


function count(string) {
    const charCount = {};
  
    for (let char of string) {
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  
    return charCount;
  }

  function count(string) {
    return string.split('').reduce((charCount, char) => {
      charCount[char] = (charCount[char] || 0) + 1;
      return charCount;
    }, {});
  }

  function count(string) {
    const charCount = {};
  
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    return charCount;
  }
  
  
  