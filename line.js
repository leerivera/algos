// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
// input

//     customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
//     n: a positive integer, the number of checkout tills.

// output

// The function should return an integer, the total time required.
 
function queueTime(customers, n) {
    let tills = Array(n).fill(0); // Initialize tills with 0 time
    for (let i = 0; i < customers.length; i++) {
        let idx = tills.indexOf(Math.min(...tills)); // Find the till with minimum time
        tills[idx] += customers[i]; // Add the customer to that till
    }
    return Math.max(...tills); // The total time is the maximum time of any till
}
function queueTime(customers, n) {
    let tills = Array(n).fill(0); // Initialize tills with 0 time

    for (let i = 0; i < customers.length; i++) {
        let idx = tills.indexOf(Math.min(...tills)); // Find the till with minimum time
        tills[idx] += customers[i]; // Add the customer to that till
    }

    return Math.max(...tills); // The total time is the maximum time of any till
}
// more