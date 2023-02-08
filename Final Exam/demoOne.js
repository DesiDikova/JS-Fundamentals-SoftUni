// function theImitationGame(input) {

//     let message = input.shift();

//     for (let element of input) {
//         let tokens = element.split('|');
//         let command = tokens[0];

//         // if (command === 'Decode') {
//         //     break;
//         // }

//         //Премества първите n букви в задната част на низа
//         if (command === 'Move') {
//             let numberOfLetters = Number(tokens[1]);
//             let deleted = message.substring(0, numberOfLetters);
//             let firstPart = message.substring(numberOfLetters);

//             message = firstPart.concat(deleted);
//         }

//         //Вмъква дадената стойност преди дадения индекс в низа
//         if (command === 'Insert') {
//             let index = Number(tokens[1]);
//             let value = tokens[2];
//             let firstPart = message.slice(0, index);
//             let secondPart = message.slice(index);

//             message = firstPart.concat(value).concat(secondPart);
//         }

//         //Променя всички срещания на дадения подниз със заместващия текст
//         if (command === 'ChangeAll') {
//             let substring = tokens[1];
//             let replacement = tokens[2];

//             message = message.split(substring).join(replacement);
//         }

//         if (command === 'Decode') {
//             console.log(`The decrypted message is: ${message}`);
//         }
//     }
// }

// theImitationGame([
//     'zzHe',
//     'ChangeAll|z|l',
//     'Insert|2|o',
//     'Move|3',
//     'Decode',
// ]);
// theImitationGame([
//     'owyouh',
//     'Move|2',
//     'Move|3',
//     'Insert|3|are',
//     'Insert|9|?',
//     'Decode',
// ]);


// function adAstra(input) {

//     let string = input[0];
//     let pattern = /([|#])(?<itemName>[A-z\s]+)\1(?<expirationDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/gm;
//     let match = pattern.exec(string);
//     let sumCalories = 0;
//     let day = 0;
//     let rezultat = [];

//     while (match !== null) {

//         let itemName = match.groups['itemName'];
//         let expirationDate = match.groups['expirationDate'];
//         let calories = Number(match.groups['calories']);
//         sumCalories += calories;

//         rezultat.push(`Item: ${itemName}, Best before: ${expirationDate}, Nutrition: ${calories}`);

//         match = pattern.exec(string);
//     }
//     day = sumCalories / 2000;

//     console.log(`You have food to last you for: ${Math.floor(day)} days!`);
//     console.log(rezultat.join('\n'));
// }

// adAstra([
//     '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
// ]);
// adAstra([
//     '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
// ]);
// adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);


// function thePianist(input) {

//     let inputL = input.length;
//     let numberOfPieces = Number(input[0]);
//     let collectionPieces = {};
//     let key;

//     for (let i = 1; i <= numberOfPieces; i++) {
//         let [piece, composer, key] = input[i].split('|');

//         collectionPieces[piece] = [];
//         collectionPieces[piece].push(composer, key);
//     }

//     for (let i = numberOfPieces + 1; i < inputL; i++) {
//         let tokens = input[i].split('|');
//         let command = tokens[0];

//         //Трябва да добавите дадената част с информацията за нея към останалите части и да отпечатате:
//         //console.log(`${piece} by ${composer} in ${key} added to the collection!`)
//         //Ако произведението вече е в колекцията, отпечатайте:
//         //console.log(`${piece} is already in the collection!`)
//         if (command === 'Add') {
//             let piece = tokens[1];
//             let composer = tokens[2];
//             let key = tokens[3];

//             if (collectionPieces.hasOwnProperty(piece)) {

//                 console.log(`${piece} is already in the collection!`);
//             } else {
//                 collectionPieces[piece] = [];
//                 collectionPieces[piece].push(composer, key);

//                 console.log(`${piece} by ${composer} in ${key} added to the collection!`)
//             }
//         }

//         //Ако частта е в колекцията, премахнете я и отпечатайте: console.log(`Successfully removed ${piece}!`)
//         //В противен случай отпечатайте: console.log(`Invalid operation! ${piece} does not exist in the collection.`)
//         if (command === 'Remove') {
//             let piece = tokens[1];

//             if (collectionPieces.hasOwnProperty(piece)) {
//                 delete collectionPieces[piece];

//                 console.log(`Successfully removed ${piece}!`);
//             } else {

//                 console.log(`Invalid operation! ${piece} does not exist in the collection.`);
//             }
//         }

//         //Ако парчето е в колекцията, сменете ключа му с дадения 
//         //и отпечатайте: console.log(`Changed the key of ${piece} to ${newKey}!`)
//         //В противен случай отпечатайте: console.log(`Invalid operation! ${piece} does not exist in the collection.`)
//         if (command === 'ChangeKey') {
//             let piece = tokens[1];
//             let newKey = tokens[2];

//             if (collectionPieces.hasOwnProperty(piece)) {
//                 collectionPieces[piece].pop(key);
//                 collectionPieces[piece].push(newKey);

//                 console.log(`Changed the key of ${piece} to ${newKey}!`);
//             } else {

//                 console.log(`Invalid operation! ${piece} does not exist in the collection.`);
//             }
//         }

//         if (command === 'Stop') {
//             for (let element in collectionPieces) {
//                 let piece = element;
//                 let composer = collectionPieces[element][0];
//                 let key = collectionPieces[element][1];

//                 console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
//             }
//         }
//     }
// }

// thePianist([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'
// ]);
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



// function worldTour(input) {

//     let allStops = input.shift();
//     let allStopsL = allStops.length;

//     for (let element of input) {
//         let [command, firstElement, lastElement] = element.split((':'));

//         //Вмъкнете дадения низ в този индекс само ако индексът е валиден
//         if (command === 'Add Stop') {
//             let index = Number(firstElement);
//             let string = lastElement;

//             if (index >= 0 && index <= allStopsL) {
//                 let firstPart = allStops.substring(0,index);
//                 let secondPart = allStops.substring(index);
//                 allStops = firstPart.concat(string).concat(secondPart);

//                 console.log(allStops);
//             } else {

//                 console.log(allStops);
//             }
//         }

//         //Премахнете елементите на низа от началния индекс до крайния индекс (включително), ако и двата индекса са валидни
//         if (command === 'Remove Stop') {
//             let startIndex = Number(firstElement);
//             let endIndex = Number(lastElement);

//             if ((startIndex >= 0 && startIndex <= allStopsL) && (endIndex >= 0 && endIndex <= allStopsL)) {
//                 let firstPart = allStops.substring(0, startIndex);
//                 let secondPart = allStops.substring(endIndex + 1);
//                 allStops = firstPart.concat('').concat(secondPart);

//                 console.log(allStops);
//             } else {

//                 console.log(allStops);
//             }
//         }

//         //Ако старият низ е в началния низ, заменете го с новия (всички срещания)
//         if (command === 'Switch') {
//             let oldString = firstElement;
//             let newString = lastElement;

//             if (allStops.includes(oldString)) {
//                 allStops = allStops.split(oldString).join(newString);

//                 console.log(allStops);
//             } else {

//                 console.log(allStops);
//             }
//         }

//         if (command === 'Travel') {
//             console.log(`Ready for world tour! Planned stops: ${allStops}`);
//         }
//     }
// }

// worldTour([
//     "Hawai::Cyprys-Greece",
//     "Add Stop:7:Rome",
//     "Remove Stop:11:16",
//     "Switch:Hawai:Bulgaria",
//     "Travel"
// ]);




// function destinationMapper(input) {

//     //Валидно местоположение
//     //Заобиколен от "=" или "/" от двете страни (първият и последният символ трябва да съвпадат)
//     //След първото "=" или "/" трябва да има само букви (първата трябва да е главна, останалите букви могат да бъдат главни или малки)
//     //Буквите трябва да са поне 3

//     let string = input;
//     let sumPoints = 0;
//     let destinations = [];
//     let pattern = /([=\/])(?<destination>[A-Z][A-z]{2,})\1/gm;
//     let match = pattern.exec(string);

//     while (match !== null) {

//         let validDestination = match.groups['destination'];
//         destinations.push(validDestination);

//         sumPoints += validDestination.length;

//         match = pattern.exec(string);
//     }

//     console.log(`Destinations: ${destinations.join(', ')}`);
//     console.log(`Travel Points: ${sumPoints}`);

// }

// destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
// destinationMapper("ThisIs some InvalidInput");



// function plantDiscovery(input) {

//     let numPlants = Number(input.shift());
//     let end = input.pop();
//     let inputL = input.length;
//     let colectionPlants = {};
//     let rez = [];

//     for (let i = 0; i < numPlants; i++) {
//         let [plant, rarity] = input[i].split('<->');
//         rarity = Number(rarity);

//         if (!colectionPlants.hasOwnProperty(plant)) {
//             colectionPlants[plant] = { rarity, rating: [] };
//         } else {
//             colectionPlants[plant].rarity = rarity;
//         }
//     }

//     for (let i = numPlants; i < inputL; i++) {
//         let element = input[i].split(' - ');
//         let value = Number(element[1]);
//         let [command, plant] = element[0].split(': ');

//         //Ако дадено име на растение е невалидно, отпечатайте console.log(`error`);
//         if (!colectionPlants.hasOwnProperty(plant)) {
//             console.log(`error`);
//         } else if (colectionPlants.hasOwnProperty(plant)) {

//             //добавете дадения рейтинг към растението (запазете всички оценки)
//             if (command === 'Rate') {
//                 let rating = value;
//                 colectionPlants[plant].rating.push(rating);
//             }

//             //актуализиране на рядкостта на растението с новото
//             if (command === 'Update') {
//                 let newRarity = value;
//                 colectionPlants[plant].rarity = newRarity;
//             }

//             // премахване на всички оценки на даденото растени
//             if (command === 'Reset') {
//                 colectionPlants[plant].rating = [];   
//             }
//         }
//     }

//     let newcolectionPlants = Object.entries(colectionPlants);
//     for (let element of newcolectionPlants) {
//         let plant = element[0];
//         let rarity = element[1].rarity;
//         let sumGrade = 0;
//         let rating = element[1].rating.map(rating => sumGrade += rating);

//         let avrGrade = 0;
//         let ratingL = rating.length;

//         if (ratingL <= 0) {
//             avrGrade = 0;
//         } else {
//             avrGrade = (sumGrade / ratingL);
//         }

//         rez.push(`- ${plant}; Rarity: ${rarity}; Rating: ${avrGrade.toFixed(2)}`);

//     }

//     console.table(`Plants for the exhibition:`);
//     console.log(`${rez.join('\n')}`);
// }

// plantDiscovery([
//     "3",
//     "Arnoldii<->4",
//     "Woodii<->7",
//     "Welwitschia<->2",
//     "Rate: Woodii - 10",
//     "Rate: Welwitschia - 7",
//     "Rate: Arnoldii - 3",
//     "Rate: Woodii - 5",
//     "Update: Woodii - 5",
//     "Reset: Arnoldii",
//     "Exhibition"
// ]);
// plantDiscovery([
//     "2",
//     "Candelabra<->10",
//     "Oahu<->10",
//     "Rate: Oahu - 7",
//     "Rate: Candelabra - 6",
//     "Exhibition"
// ]);



// function secretChat(input) {

//     let message = input.shift();
//     let end = input.pop();

//     for (let element of input) {
//         let tokens = element.split(':|:');
//         let command = tokens[0];

//         //Вмъква един интервал в дадения индекс. Даденият индекс винаги ще бъде валиден.
//         if (command === 'InsertSpace') {
//             let index = Number(tokens[1]);
//             let firstPart = message.substring(0, index);
//             let secondPart = message.substring(index);

//             message = firstPart.concat(' ').concat(secondPart);

//             console.log(message);
//         }

//         //Ако съобщението съдържа дадения подниз, изрежете го, обърнете го и го добавете в края на съобщението.
//         //Ако не, отпечатайте "грешка".
//         //Тази операция трябва да замени само първото срещане на дадения подниз, ако има две или повече срещания.
//         if (command === 'Reverse') {
//             let substring = tokens[1];

//             if (message.includes(substring)) {
//                 let index = message.indexOf(substring);
//                 let firstPart = message.slice(0, index);
//                 let secondPart = message.slice(index + substring.length); 

//                 substring = substring
//                     .split('')
//                     .reverse()
//                     .join('');

//                 message = firstPart.concat(secondPart).concat(substring);

//                 console.log(message);

//             } else {
//                 console.log(`error`);
//             }
//         }

//         //Променя всички срещания на дадения подниз със заместващия текст.
//         if (command === 'ChangeAll') {
//             let substring = tokens[1];
//             let replacement = tokens[2];

//             message = message.split(substring).join(replacement);
//             console.log(message);
//         }
//     }

//     console.log(`You have a new text message: ${message}`);
// }

// secretChat([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
// ]);
// secretChat([
//     'Hiware?uiy',
//     'ChangeAll:|:i:|:o',
//     'Reverse:|:?uoy',
//     'Reverse:|:jd',
//     'InsertSpace:|:3',
//     'InsertSpace:|:7',
//     'Reveal'
// ]);


// function mirrorWords(input) {

//     //     Скритите двойки думи са:
//     //Заобиколен от "@" или "#" (само един от двата) в следния модел #wordOne##wordTwo# или @wordOne@@wordTwo@
//     //Дължина на поне 3 знака (без околните символи)
//     //Състои се само от букви

//     let text = input;

//     let arrayWords = [];
//     let arrayMirrorWords = [];
//     let findWords = 0;
//     let pattern = /([@#])(?<firstWord>[A-z]{3,})\1\1(?<secondWord>[A-z]{3,})\1/gm;
//     let match = pattern.exec(text);

//     while (match !== null) {

//         let firstWord = match.groups['firstWord'];
//         let secondWord = match.groups['secondWord'];
//         let mirrorWord = secondWord.split('').reverse().join('');

//         arrayWords.push(firstWord, secondWord);

//         if (firstWord === mirrorWord) {
//             arrayMirrorWords.push(`${firstWord} <=> ${secondWord}`);
//         }

//         match = pattern.exec(text);
//     }

//     if (arrayWords.length > 0) {
//         findWords = arrayWords.length / 2;
//         console.log(`${findWords} word pairs found!`);
//     } else {
//         console.log(`No word pairs found!`);
//     }

//     if (arrayMirrorWords.length === 0) {
//         console.log(`No mirror words!`);
//     } else if (arrayMirrorWords.length > 0) {
//         console.log(`The mirror words are:`);
//         console.log(arrayMirrorWords.join(', '));
//     }
// }

// mirrorWords([
//     '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
// ]);
// mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
// mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);



function needForSpeedIII(input) {

    let numCar = Number(input.shift());
    let end = input.pop();
    let inputL = input.length;
    let cars = {};

    const maximumFuel = 75;

    for (let i = 0; i < numCar; i++) {
        let [car, mileage, fuel] = input[i].split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);

        cars[car] = { mileage, fuel };  
    }

    for (let i = numCar; i < inputL; i++) {
        let tokens = input[i].split(' : ');
        let command = tokens[0];
        let car = tokens[1];

        if (command === 'Drive') {
            let distance = Number(tokens[2]);
            let fuel = Number(tokens[3]);

            if (fuel <= cars[car].fuel) {
                cars[car].mileage += distance;
                cars[car].fuel -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            } else {
                console.log(`Not enough fuel to make that ride`);
            }

            if (cars[car].mileage >= 100000) {
                delete cars[car];
                console.log(`Time to sell the ${car}!`);
            }
        }

        if (command === 'Refuel') {
            let fuel = Number(tokens[2]);
            cars[car].fuel += fuel;

            if (cars[car].fuel > maximumFuel) {
                let diff = cars[car].fuel - maximumFuel;
                let diffInFuel = fuel - diff;

                cars[car].fuel = maximumFuel;

                console.log(`${car} refueled with ${diffInFuel} liters`);
            } else {
                console.log(`${car} refueled with ${fuel} liters`);
            }
        }

        if (command === 'Revert') {
            let kilometers = Number(tokens[2]);

            cars[car].mileage -= kilometers;

            if (cars[car].mileage < 10000) {
                cars[car].mileage = 10000;
                break;
            }

            console.log(`${car} mileage decreased by ${kilometers} kilometers`);
        }
    }

    let newCars = Object.entries(cars);
    for (let element of newCars) {
        let car = element[0];
        let mileage = element[1].mileage;
        let fuel = element[1].fuel;

        console.log(`${car} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`)
    }
}

needForSpeedIII([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);
// needForSpeedIII([
//     '4',
//     'Lamborghini Veneno|11111|74',
//     'Bugatti Veyron|12345|67',
//     'Koenigsegg CCXR|67890|12',
//     'Aston Martin Valkryie|99900|50',
//     'Drive : Koenigsegg CCXR : 382 : 82',
//     'Drive : Aston Martin Valkryie : 99 : 23',
//     'Drive : Aston Martin Valkryie : 2 : 1',
//     'Refuel : Lamborghini Veneno : 40',
//     'Revert : Bugatti Veyron : 2000',
//     'Stop'
// ]);



// function passwordReset(input) {

//     let text = input.shift();
//     let end = input.pop();
//     let textL = text.length;

//     for (let tokens of input) {
//         tokens = tokens.split(' ');
//         let command = tokens[0];

//         //Взема само знаците с нечетни индекси и ги свързва, 
//         //за да получи новата необработена парола и след това я отпечатва.
//         if (command === 'TakeOdd') {
//             for (let i = 0; i < textL; i += 2) {
//                 let element = text[i + 1];
// console.log(element)
//             }
//             console.log(password)

//         }

//         //Получава подниза с дадена дължина, започващ от дадения индекс от паролата и премахва първото му срещане, 
//         //след което отпечатва паролата на конзолата.
//         if (command === 'Cut') {
//             let index = Number(tokens[1]);
//             let length = Number(tokens[2]);
//         }

//         //Ако необработената парола съдържа дадения подниз, замества всички негови срещания с дадения заместващ текст 
//         //и отпечатва резултата. Ако не стане, отпечатва console.log(`Nothing to replace!`);
//         if (command === 'Substitute') {
//             let substring = tokens[1];
//             let substitute = tokens[2];
//         }

//         //console.log(`Your password is: ${password}`);
//     }
// }

// passwordReset([
//     "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
//     "TakeOdd",
//     "Cut 15 3",
//     "Substitute :: -",
//     "Substitute | ^",
//     "Done"
// ]);
// passwordReset([
//     "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
//     "TakeOdd",
//     "Cut 18 2",
//     "Substitute ! ***",
//     "Substitute ? .!.",
//     "Done"
// ]);
