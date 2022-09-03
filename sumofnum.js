// Given an array of numbers, 
// create a new array where each element is the sum of the number at that index and the number at the next index in the original array. 
// If a number in the original array doesn't have a number at the next index 
// (i.e., it's the last number in the array), simply copy it to the new array.

// Examples:

// Input: [1, 2, 3, 4, 5]
// Output: [3, 5, 7, 9, 5]

// Explanation: 1+2=3, 2+3=5, 3+4=7, 4+5=9, 5 (no number at the next index, so just copy it)

// Input: [7, 1, 8, 2]
// Output: [8, 9, 10, 2]

// Explanation: 7+1=8, 1+8=9, 8+2=10, 2 (no number at the next index, so just copy it)

function newArr(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i+1] === undefined){
            newArr.push(arr[i])
        }else{
            newArr.push(arr[i] + arr[i+1])
        }
    }
    return newArr;
}