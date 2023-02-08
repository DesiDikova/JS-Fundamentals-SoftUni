function wordOccurrences(words) {
    
    //създавам мап, в който ще събирам думите и техния брой
    let mapWords = new Map();

    //цикъл, с който обикалям масива от думи 
    for (let word of words) {

        //ако не се съдържа думата в мап-а - добави думата и стойност нула
        if (!mapWords.has(word)) {
            mapWords.set(word, 0);
        }
        
        //в противен случай вземи думата и върни нейната стойност
        let sumWord = mapWords.get(word)

        //актуализирам мап-а с новите стойности
        mapWords.set(word, sumWord + 1);
    }

     //първо: превръщам мап-а в масив; второ: сортирам стойностите в низходящ ред
     let sortedWords = Array.from(mapWords).sort((a, b) => b[1] - a[1]);
        
     //цикъл, в който ще взема думата(word) и нейната стойност(value) и ще отпечатам резултата
     for (let [word, value] of sortedWords) {
         console.log(`${word} -> ${value} times`);
     }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);