// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
function noBoringZeros(n) {
    while (n % 10 === 0 && n !== 0) {
      n /= 10;
    }
    return n;
  }

//   Using String Conversion:
// You can convert the number to a string, then use the replace() method with a regular expression to remove the trailing zeros. Finally, convert the resulting string back to a number.
function noBoringZeros(n) {
    return Number(n.toString().replace(/0+$/, ''));
  }
//   Using a While Loop (without dividing):
//   Instead of dividing the number repeatedly by 10, 
//   you can use a while loop to remove the trailing zeros 
//   without dividing.  