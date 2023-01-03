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

