// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Examples

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]



function sortArray(array) {
    // First, let's extract all the odd numbers from the array and sort them in ascending order.
    const oddNumbers = array.filter(n => n % 2 !== 0).sort((a, b) => a - b);

    // Then, let's iterate over the original array. For each number, if it's odd, we replace it with
    // the smallest remaining number from oddNumbers (removing that number from oddNumbers). If it's
    // even, we leave it as is. This will sort the odd numbers while leaving the even numbers in place.
    return array.map(n => n % 2 === 0 ? n : oddNumbers.shift());
}


function sortArray(array) {
    // First, let's extract all the odd numbers from the array and sort them in ascending order.
    const oddNumbers = array.filter(n => n % 2 !== 0).sort((a, b) => a - b);

    // We'll use a counter to keep track of the next odd number to place in the sorted array
    let i = 0;

    // Sort the array. For each pair of numbers, if they're both odd, sort them in ascending order.
    // If one of them is even, it stays in place. The odd numbers are replaced from our sorted oddNumbers array.
    return array.map(n => n % 2 === 0 ? n : oddNumbers[i++]);
}
