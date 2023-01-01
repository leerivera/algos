// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"


function position(letter) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const positionInAlphabet = alphabet.indexOf(letter.toLowerCase()) + 1;
  
    return `Position of alphabet: ${positionInAlphabet}`;
  }

  function position(letter) {
    const positionInAlphabet = letter.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    return `Position of alphabet: ${positionInAlphabet}`;
  }

  function position(letter) {
    const alphabetPositions = {
      'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7,
      'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14,
      'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21,
      'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26
    };
  
    return `Position of alphabet: ${alphabetPositions[letter.toLowerCase()]}`;
  }

    function position(letter) {

        let alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let position = alphabet.indexOf(letter) + 1;
    }
  