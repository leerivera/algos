// Your job is to write a function which increments a string, to create a new string.

//     If the string already ends with a number, the number should be incremented by 1.
//     If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.
// solve in javascript and explain code with comments

function incrementString(str) {
    // Find the last character that is a digit
    let lastDigitIndex = str.search(/\d*$/);
  
    // If the string doesn't end with a digit, append 1
    if (lastDigitIndex === -1) {
      return str + "1";
    }
  
    // Split the string into the part before the last digit and the part after it
    let beforeLastDigit = str.slice(0, lastDigitIndex);
    let afterLastDigit = str.slice(lastDigitIndex);
  
    // Increment the number after the last digit
    let incremented = String(Number(afterLastDigit) + 1);
  
    // If the incremented number has fewer digits than the original number,
    // pad it with zeros until it has the same number of digits
    while (incremented.length < afterLastDigit.length) {
      incremented = "0" + incremented;
    }
  
    // Return the incremented number appended to the part before the last digit
    return beforeLastDigit + incremented;
  }
  