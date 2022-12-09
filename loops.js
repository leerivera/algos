for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  

  const person = {
    name: 'John Doe',
    age: 32,
    city: 'New York'
  };
  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  

  const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
  console.log(number);
}

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);
