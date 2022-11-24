function queueTime(customers, n) {
    let tills = Array(n).fill(0); // Initialize tills with 0 time

    for (let i = 0; i < customers.length; i++) {
        let idx = tills.indexOf(Math.min(...tills)); // Find the till with minimum time
        tills[idx] += customers[i]; // Add the customer to that till
    }

    return Math.max(...tills); // The total time is the maximum time of any till
}
