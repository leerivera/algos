function sortByLength (array) {
    // Return an array containing the same strings, ordered from shortest to longest
    const sortArray = array.sort((a,b) => a.length - b.length)
    console.log(sortArray)
    return sortArray
  };