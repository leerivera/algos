// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"


function position(letter) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const positionInAlphabet = alphabet.indexOf(letter.toLowerCase()) + 1;
  
    return `Position of alphabet: ${positionInAlphabet}`;
  }