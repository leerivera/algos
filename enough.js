function enough(cap, on, wait) {
    // Calculate the total passengers on the bus including those waiting
    let total = on + wait;

    // If total passengers is less than or equal to the bus capacity, return 0
    // Otherwise, return the difference between total passengers and bus capacity
    return total <= cap ? 0 : total - cap;
}

function enough(cap, on, wait) {
    return Math.max(wait + on - cap, 0);
  }