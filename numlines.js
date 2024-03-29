
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]








function number(lines) {
    return lines.map((line, index) => {
        return `${index + 1}: ${line}`;
    });
}

// Testing the function
console.log(number(["a", "b", "c"]));  // Output: ["1: a", "2: b", "3: c"]

function number(lines) {
    let result = [];

    for(let i = 0; i < lines.length; i++) {
        let numberedLine = `${i + 1}: ${lines[i]}`;
        result.push(numberedLine);
    }

    return result;
}

// Testing the function
console.log(number(["a", "b", "c"]));  // Output: ["1: a", "2: b", "3: c"]

