function pascalCaseSplitter(string) {

    let pattern = /[A-Z][a-z]*/g;
    let match = pattern.exec(string);
    let word = [];

    //Нека разделим стринга по всяка дума в него
    while (match !== null) {

        word.push(match[0]);

        match = pattern.exec(string);
    }

    console.log(word.join(', ')); 
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
// pascalCaseSplitter('HoldTheDoor');
// pascalCaseSplitter('ThisIsSoAnnoyingToDo');