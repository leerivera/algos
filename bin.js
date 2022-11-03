function binToDec(bin){
    return parseInt(bin,2);
  }

  const binToDec = bin => [...bin].reduce((dec, bit) => dec << 1 | bit, 0);

  const binToDec = bin => [...bin].reverse().reduce((acc, elt, idx) => acc + elt * 2 ** idx, 0)