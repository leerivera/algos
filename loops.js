// for: This loop is used to execute a block of code a specific number of times. For example:
for (let i = 0; i < 10; i++) {
    console.log(i);
  }

//   for...in: This loop is used to iterate over the enumerable properties of an object. For example:
  

  const person = {
    name: 'John Doe',
    age: 32,
    city: 'New York'
  };
  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }
//   for...of: This loop is used to iterate over the values of an iterable object, such as an array. For example:

  const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
  console.log(number);
}
// while: This loop is used to execute a block of code repeatedly while a specified condition is met. For example:


let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// do...while: This loop is similar to the while loop, but it guarantees that the code inside the loop will be executed at least once. For example:
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);
