// Functions for the numbers 0-9
function zero(operation) { return operation ? operation(0) : 0; }
function one(operation) { return operation ? operation(1) : 1; }
function two(operation) { return operation ? operation(2) : 2; }
function three(operation) { return operation ? operation(3) : 3; }
function four(operation) { return operation ? operation(4) : 4; }
function five(operation) { return operation ? operation(5) : 5; }
function six(operation) { return operation ? operation(6) : 6; }
function seven(operation) { return operation ? operation(7) : 7; }
function eight(operation) { return operation ? operation(8) : 8; }
function nine(operation) { return operation ? operation(9) : 9; }

// Functions for the operations
function plus(b) { return function(a) { return a + b; } }
function minus(b) { return function(a) { return a - b; } }
function times(b) { return function(a) { return a * b; } }
function dividedBy(b) { return function(a) { return Math.floor(a / b); } }

console.log(seven(times(five()))); // 35
console.log(four(plus(nine()))); // 13
console.log(eight(minus(three()))); // 5
console.log(six(dividedBy(two()))); // 3
console.log(eight(dividedBy(three()))); // 2

// Declare an array with 10 elements (using the Array constructor)
const array = [...Array(10)];

// Use the map function to create a new array of functions by iterating
// over the elements of the original array
const [zero, one, two, three, four, five, six, seven, eight, nine] = array.map((_, idx) => {
  // This callback function is called for each element in the array
  // It receives two arguments: the element itself (_, which is not used)
  // and the index of the element (idx)
  
  // Return a new function that takes an optional parameter fn
  return function(fn) {
    // If fn is not provided, return the index (which is the same as the corresponding number)
    if (!fn) {
      return idx;
    }
    // If fn is provided, call fn with the index as the argument and return the result
    return fn(idx);
  };
});

// Declare an array with the operations `+`, `-`, `*`, and `/`
// Declare an array with the operations `+`, `-`, `*`, and `/`
const operations = [`+`, `-`, `*`, `/`];

// Use the map function to create a new array of functions by iterating
// over the elements of the operations array
const [plus, minus, times, dividedBy] = operations.map(val => {
  // This callback function is called for each element in the array
  // It receives the element itself (val)

  // Use the Function constructor to create a new function from a string of JavaScript code
  // The code is a template string that uses the val variable to specify the operation
  // (either `+`, `-`, `*`, or `/`)
  return new Function(`b`, `return a => a ${val} b ^ 0`);
});

// Now you can use the functions like this:

console.log(seven(times(five()))); // 35
console.log(four(plus(nine()))); // 13
console.log(eight(minus(three()))); // 5
console.log(six(dividedBy(two()))); // 3
console.log(eight(div


