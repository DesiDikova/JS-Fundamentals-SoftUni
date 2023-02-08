//ДАВА 60/100

// function partyTime(array) {

//     let index = 0;
//     let command = '';

//     let party = new Map();
//     let vip = new Map();
//     let regular = new Map();


//     //Вземам гостите до команда 'PARTY' и ги добавям в мап-а 'party'
//     while (command !== 'PARTY') {
//         command = array[index];
//         party.set(command);
//         index++;
//         //изтрий командата 'PARTY' - ако се съдържа в мап-а
//         if (party.has('PARTY')) {
//             party.delete(command);
//         }
//     }

//     //Взимам последния елемент от масива до командата 'PARTY'
//     let arrayL = array.length;

//     for (let i = arrayL - 1; i >= 0; i--) {
//         command = array[i];
//         while (command !== 'PARTY') {
//             let guest = command;
//             //ако в мап-а се съдържа госта - то нека да бъде изтрит
//             if (party.has(guest)) {
//                 party.delete(guest);
//             }

//             i--;
//             command = array[i];
//         }
//         break;
//     }

//     //отпечатвам броя на гостите
//     console.log(party.size);

//     //превръщам мап-а в масив, за да проверя дали госта е вип или редовен и да ги добавя в съответния списък
//     let arrayParty = Array.from(party);

//     //взимам всички гости 
//     for (let [guest, value] of arrayParty) {

//         let char = guest.charCodeAt(0);
//         //проверявам, ако госта е редовен(първият символ от името му е цифра) - добавям го в списъка на редовните гости
//         if (char >= 48 && char <= 57) {
//             vip.set(guest);
//             //в противен случай - добавям го в списъка с вип гости
//         } else {
//             regular.set(guest);
//         }
//     }

//     //превръщам vip мап-а в масив и отпечатвам гостите от този масив
//     let vipArray = Array.from(vip)
//     for (let guest of vipArray) {
//         console.log(guest[0]);
//     }

//     //превръщам regular мап-а в масив и отпечатвам гостите от този масив
//     let regularArray = Array.from(regular)
//     for (let guest of regularArray) {
//         console.log(guest[0]);
//     }
// }

// // partyTime([
// //     '7IK9Yo0h',
// //     '9NoBUajQ',
// //     'Ce8vwPmE',
// //     'SVQXQCbc',
// //     'tSzE5t0p',
// //     'PARTY',
// //     '9NoBUajQ',
// //     'Ce8vwPmE',
// //     'SVQXQCbc'
// // ]);
// partyTime([
//     'm8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'xys2FYzn',
//     'MDzcM9ZK',
//     'PARTY',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'm8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ'
// ]);



function partyTime(array) {

    let indexParty = array.indexOf('PARTY');
    let arrayL = array.length;
    let vip = [];
    let regular = [];

    //цикъл до командата PARTY и ще проверявам госта към кой списък трябва да се добави
    for (let i = 0; i < indexParty; i++) {
        let currentGuest = array[i];
        //взимам първият символ на госта и проверявям дали е цифра (вип списък)
        let char = currentGuest.charCodeAt(0);
        if (char >= 48 && char <= 57) {
            vip.push(currentGuest);
        } else {
            regular.push(currentGuest);
        }
    }

    //цикъл, в който ще махам текущия гост от съответния списък
    for (let i = indexParty + 1; i < arrayL; i++) {
        let currentGuest = array[i];
        //ако във vip списъка се съдържа текущия гост
        if (vip.includes(currentGuest)) {
            //във vip отиди на индекса на госта и махни 1 елемент
            vip.splice(vip.indexOf(currentGuest), 1);
            //в противен случа - ако в regular се съдържа текущия гост
        } else if (regular.includes(currentGuest)) {
            //отиди в regular и изтрий от индекса на текущия гост 1 елемент
            regular.splice(regular.indexOf(currentGuest), 1);
        }
    }

    //взимам дължината на двата списъка и отпечатвам резултата
    let size = vip.length + regular.length;
    console.log(size);

    // отпечатвам гостите от vip списъка
    for (let guest of vip) {
        console.log(guest);
    }

    //отпечатвам гостите от regular списъка
    for (let gues of regular) {
        console.log(gues);
    }
}

// partyTime([
//     '7IK9Yo0h',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc',
//     'tSzE5t0p',
//     'PARTY',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc'
// ]);
partyTime([
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);