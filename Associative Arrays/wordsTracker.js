function wordsTracker(array) {

    //създавам празен мап, в който ще събирам думите и нехните съвпадения
    let wordsMap = new Map();

    //изрязвам първият елемент с търсените думи от масива и го превръщам в отделен масив 
    let words = array.shift().split(' ');

    //добавям търсените думи в мап-а
    for (let word of words) {
        wordsMap.set(word, 0);
    }

    //цикъл, в който ще взема всяка текуща дума от началния масив
    for (let currentWord of array) {
        
        //проверявам в мап-а съдържа ли се текущата дума
        if (wordsMap.has(currentWord)) {
            wordsMap.set(currentWord, wordsMap.get(currentWord) + 1);
        }
    }

    //сортирам мап-а (първо го превръщам в масив)
    let sortedWords = Array.from(wordsMap).sort((a, b) => b[1] - a[1]);

    //взимам необходимите променливи от масива и отпечатвам резултата
    for (let [word, value] of sortedWords) {
        console.table(`${word} - ${value}`);
    }
}

wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
]);