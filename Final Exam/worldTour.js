console.log('ok')
function worldTour(input) {

    let allOfStops = input.shift();
    let allOfStopsL = allOfStops.length;

    for (let i = 0; i < input.length; i++) {
        let line = input[i].split(':');
        let command = line[0];

        //След командата „Пътуване“ - отпечатваме
        if (command === 'Travel') {
            console.log(`Ready for world tour! Planned stops: ${allOfStops}`);
        }

        //Вмъкваме дадения стринг в този индекс само, ако индексът е валиден
        if (command === 'Add Stop') {

            let index = Number(line[1]);
            let string = line[2];

            if ((index >= 0) && (index <= allOfStopsL)) {

                let firstPart = allOfStops.substring(0, index);
                let secondPart = allOfStops.substring(index);
                allOfStops = firstPart.concat(string).concat(secondPart);
            }
          
          console.log(allOfStops);
        }

        //Ако са валидни и двата индекса - Премахваме елементите на стринга от началния индекс до крайния(вкл.)
        if (command === 'Remove Stop') {

            let startIndex = Number(line[1]);
            let endIndex = Number(line[2]);

            if ((startIndex >= 0 && startIndex <= allOfStopsL) && (endIndex >= 0 && endIndex <= allOfStopsL)) {

                let firstPart = allOfStops.substring(0, startIndex);
                let secondPart = allOfStops.substring(endIndex + 1);
                allOfStops = firstPart + secondPart;
            }
          
          console.log(allOfStops);
        }

        //Ако старият стринг е в началния стринг, заменете го с новия (всички срещания)
        if (command === 'Switch') {

            let oldString = line[1];
            let newString = line[2];
          
          if (allOfStops.includes(oldString)) {
            
          	 allOfStops = allOfStops.split(oldString).join(newString);
          }

            console.log(allOfStops);
        }
    }
}