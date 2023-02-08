function thePianist(array) {

    let collectionWithPiece = {};
    let numberOfPieces = array.shift();
    let piece;
    let composer;
    let key;

    //взимам първите три парчета от масива, с необходимата информация за тях 
    for (let i = 0; i < numberOfPieces; i++) {
        let element = array[i];
        let [piece, composer, key] = element.split('|');
        //ако не се среща парчето в обекта - то всяко парче, нека бъде равно на празен масив
        if (!collectionWithPiece.hasOwnProperty(piece)) {
            collectionWithPiece[piece] = [];
            //към парчето пушни композитора и ключа
            collectionWithPiece[piece].push(composer, key);
        }
    }

    //започвам да обработвам масива след броя парчета
    for (let i = numberOfPieces; i < array.length; i++) {
        let element = array[i].split('|');
        let command = element[0];

        if (command === 'Stop') {
            break;
        }
        //ако командата е 'Add'
        else if (command === 'Add') {
            piece = element[1];
            composer = element[2];
            key = element[3];
            //ако парчето не се среща - то всяко парче, нека бъде равно на празен масив и пушни към него композитора и ключа
            if (!collectionWithPiece.hasOwnProperty(piece)) {
                collectionWithPiece[piece] = [];
                collectionWithPiece[piece].push(composer, key);

                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                //ако парчето се среща 
            } else {
                console.log(`${piece} is already in the collection!`);
            }
        }

        //ако командата е 'Remove'
        else if (command === 'Remove') {
            piece = element[1];
            //ако парчето се среща - се премахва
            if (collectionWithPiece.hasOwnProperty(piece)) {
                delete collectionWithPiece[piece];

                console.log(`Successfully removed ${piece}!`);
                //ако парчето не се среща 
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }

        //ако командата е 'ChangeKey'
        else if (command === 'ChangeKey') {
            piece = element[1];
            let newKey = element[2];
            //ако парчето се среща - неговият ключ се заменя с новия ключ
            if (collectionWithPiece.hasOwnProperty(piece)) {
                collectionWithPiece[piece].pop(key);
                collectionWithPiece[piece].push(newKey);

                console.log(`Changed the key of ${piece} to ${newKey}!`);
                //ако парчето не се среща 
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }

    //отпечатване на резултата
    for (let element in collectionWithPiece) {
        let piece = element;
        let composer = collectionWithPiece[element][0];
        let key = collectionWithPiece[element][1];
        
        console.table(`${piece} -> Composer: ${composer}, Key: ${key}`);
    }
    console.log(collectionWithPiece)
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);
// thePianist([
//     '4',
//     'Eine kleine Nachtmusik|Mozart|G Major',
//     'La Campanella|Liszt|G# Minor',
//     'The Marriage of Figaro|Mozart|G Major',
//     'Hungarian Dance No.5|Brahms|G Minor',
//     'Add|Spring|Vivaldi|E Major',
//     'Remove|The Marriage of Figaro',
//     'Remove|Turkish March',
//     'ChangeKey|Spring|C Major',
//     'Add|Nocturne|Chopin|C# Minor',
//     'Stop'
// ]);