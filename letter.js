function position(letter) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const positionInAlphabet = alphabet.indexOf(letter.toLowerCase()) + 1;
  
    return `Position of alphabet: ${positionInAlphabet}`;
  }