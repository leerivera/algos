
// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.

// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.











function roundToNext5(n) {
    // If 'n' is already a multiple of 5, return 'n'
    if(n % 5 === 0) {
        return n;
    } else if (n > 0) {
        // 'n' plus (5 - the remainder of 'n' divided by 5) will be the next multiple of 5
        return n + (5 - (n % 5));
    } else {
        // For negative 'n', 'n' minus the remainder of 'n' divided by 5 will be the next multiple of 5
        return n - (n % 5);
    }
}
