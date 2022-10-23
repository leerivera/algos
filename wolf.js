


function warnTheSheep(queue) {
    const wolfIndex = queue.findIndex((animal) => animal === "wolf");
    const sheepIndex = queue.length - wolfIndex - 1;
  
    if (wolfIndex === queue.length - 1) {
      return "Pls go away and stop eating my sheep";
    } else {
      return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`;
    }
  }
  
    function warnTheSheep(queue) {
        const wolfIndex = queue.findIndex((animal) => animal === "wolf");
        const sheepIndex = queue.length - wolfIndex - 1;
        
        if (wolfIndex === queue.length - 1) {
            return "Pls go away and stop eating my sheep";
        } else {
            return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`;
        }
        }

        function warnTheSheep(queue) {
            const position = queue.reverse().indexOf('wolf');
            return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
          }