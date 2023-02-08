function countStringOccurrences(text, word) {
    
    let count = 0;
    let sentence = text.split(' ');

    for (let element of sentence) {
        if (element === word) {
            count ++;
        }
    }
    
    console.log(count)
}

countStringOccurrences('This is a word and it also is a sentence', 'is');
countStringOccurrences('softuni is great place for learning new programming languages', 'softuni');