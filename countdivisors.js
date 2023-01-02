function getDivisorsCnt(n){
    let divisors = 0;
for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    divisors++;
  }
}
return divisors;
}

// This function works by first creating an array of integers from 1 to n using 
// Array.prototype.fill() and Array.prototype.map(). It then filters this array 
// to only keep the elements that are divisors of n, using 
// Array.prototype.filter(). 
// Finally, it returns the length of the filtered array, which is the number of divisors.



function countDivisors(n) {
    return Array(n)
      .fill()
      .map((_, i) => i + 1)
      .filter(i => n % i == 0).length;
  }
  