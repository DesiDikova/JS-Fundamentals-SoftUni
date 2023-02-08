function numbers(arr) {

    let numberArr = arr.shift().split(' ').map(Number);

    for (let elem of arr) {

        if (elem === 'Finish') {
            console.log(numberArr.join(' '));  
            break;
        }
        
        let [command, firstElement, seconElement] = elem.split(' ');
        firstElement = Number(firstElement);
        seconElement = Number(seconElement);

        if (command === `Add`) {
            numberArr.push(firstElement);
        } else if (command === `Remove`) {
            let index = numberArr.indexOf(firstElement);
            numberArr.splice(index,1);
        } else if (command === `Replace`) {
            let index = numberArr.indexOf(firstElement);
            numberArr[index] = seconElement;
        } else if (command === `Collapse`) {
            numberArr = numberArr.filter(x => x > firstElement);
        }        
    }
}

numbers(["1 4 5 19",
"Add 1",
"Remove 4",
"Finish"]);
