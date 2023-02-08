function race(input) {

    let letters = /[A-Za-z]+/g;
    let digits = /\d/g;

    let participants = input.shift().split(', ');
    let endInput = input.pop();

    let nameParticipants = {};

    participants.forEach(name => nameParticipants[name] = 0); //създавам обект, в който взимам всички участници от списъка

    for (let element of input) {
        let name = element
            .match(letters)
            .join('');

        let distance = element
            .match(digits)
            .reduce((a, b) => Number(a) + Number(b));

        //ако се съдържа името на участника в обекта - добави дестинацията
        //(ако един и същи участник се съдържа повече от веднъж, добавяме разстоянието към старото му разстояние)
        if (nameParticipants.hasOwnProperty(name)) {

            nameParticipants[name] += distance;
        }
    }

    //сортирам стойностите на обекта в намаляващ ред
    let sorted = Object
        .entries(nameParticipants)
        .sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA)
        .splice(0, 3);

    console.table(`1st place: ${sorted[0][0]}`);
    console.table(`2nd place: ${sorted[1][0]}`);
    console.table(`3rd place: ${sorted[2][0]}`);
       
}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);
race([
    'Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race'
]);