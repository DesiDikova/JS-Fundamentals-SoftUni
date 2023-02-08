function cardGame(arrayOfString) {

    let gameWithCards = {};
    let pointsGame = {};

    //взимам всеки символ и му присвоявам стойност
    let symbol = {
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1,
    };

    for (let command of arrayOfString) {
        let elem = command.split(': ');
        let name = elem[0];
        let cards = elem[1].split(', ');

        //ако не се съдържа името в обекта, то нека името има стойност - празен масив, в който ще събирам всички оценки на всеки играч
        if (!gameWithCards[name]) {
            gameWithCards[name] = [];
        }
        //при първото завъртане, към name ще добавим стойност - всички карти, 
        //но при второто завъртане на цикъла, когато name вече ще съществува в нашия обект,
        //с помощта на .concat() съединява това, което е от ляво (в случая картите на играча) 
        //с това, което е от дясно (в случая - новите карти на играча). 
        //Така получаваме масив без повтарящи се имена и всички налични карти за всеки играч
        gameWithCards[name] = gameWithCards[name].concat(cards);
    }

    //изчисляване на резултата
    for (let [name, cards] of Object.entries(gameWithCards)) {
        pointsGame[name] = 0;
        let cardsL = cards.length

        for (let i = 0; i < cardsL; i++) {
            let card = cards[i];
            //Бъркам в масива от карти: 1- проверявам индекса на картата равен ли е на i; 
            //ако е равен - то сплитвам всяка карта; режа последния елемент (типа), който винаги е само един символ
            //и остатъка е силата, която я джойвъм, за да долепя цифрата 10
            //2C === 0; 4H === 1; 9H === 2; ... JD === 5; JD === 6(НЕ, JD е равно на 5) - по този начин махам повтарящите карти от обекта
            if (cards.indexOf(card) === i) {
                let cardString = card.split('');
                let type = cardString.pop();
                let power = cardString.join('');
                let sumPoints = 0;

                //проверявам типа и силата от обекта и правя необходимите изчисления
                if (Object.keys(symbol).includes(power)) {
                    sumPoints = symbol[power] * symbol[type];
                } else {
                    sumPoints = Number(power) * symbol[type];
                }
                //когато изчисля стойността на всички карти, добавям към обекта pointsGame - за всяко име, получената сума от точки
                pointsGame[name] += sumPoints;

            }
        }
    }
    //отпечатване на резултата
    for (let [name, points] of Object.entries(pointsGame)) {
        console.log(`${name}: ${points}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);
// cardGame([
//     'John: 2C, 4H, 9H, AS, QS',
//     'Slav: 3H, 10S, JC, KD, 5S, 10S',
//     'Alex: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'Slav: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'Alex: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'John: JD, JD, JD, JD'
// ]);