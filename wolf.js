


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

          function warnTheSheep(q) {
            return q[q.length-1] === 'wolf' ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${q.length - (q.indexOf('wolf')+1)}! You are about to be eaten by a wolf!`
          }

          let warnTheSheep = q => {
            let index = q.reverse().indexOf('wolf');
            return index ? `Oi! Sheep number ${index}! You are about to be eaten by a wolf!` : 'Pls go away and stop eating my sheep';
          }