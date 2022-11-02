function binToDec(bin){
    return parseInt(bin,2);
  }

  const binToDec = bin => [...bin].reduce((dec, bit) => dec << 1 | bit, 0);