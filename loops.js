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
  