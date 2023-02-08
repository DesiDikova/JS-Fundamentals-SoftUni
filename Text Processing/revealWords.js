function revealWords(firstElement, lastElement) {

    let arrayFirstElement = firstElement.split(', ')
    let arrayLastElement = lastElement.split(' ');

    for (let word of arrayLastElement) {
        //ако думата от втория масив съдържа в себе си '*' - то влез във втори фор цикъл с елементите от първия масив
        if (word.includes('*')) {
            for (let element of arrayFirstElement) {
                //ако дължината на думата от втория масив, съвпада с дължината на елемента от първия масив
                if (word.length === element.length) { 
                    lastElement = lastElement.replace(word, element); //замести символите със съответната
                }
            }
        }
    }
    console.log(lastElement);
}

revealWords('great', 'softuni is ***** place for learning new programming languages');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');