// function echoType(parameter) {

//     if (typeof parameter === 'string') {
//         console.log(typeof parameter);
//         console.log(parameter);
//     } else if (typeof parameter ==='number') {
//         console.log(typeof parameter);
//         console.log(parameter);
//     } else {
//         console.log(typeof parameter);
//         console.log('Parameter is not suitable for printing');
//     }
// }

// echoType('Hello, JavaScript!');
// echoType(18);
// echoType(null);

// function concatenateNames(furstName, secondName, delimiter) {
//     console.log(`${furstName}${delimiter}${secondName}`);
// }

// concatenateNames('John', 'Smith', '->');
// concatenateNames('Jan', 'White', '<->');
// concatenateNames('Linda', 'Terry', '=>');

// function rightPlace(furstString, char, secondString) {

//     let newString = furstString.replace('_', char);

//     if (newString === secondString) {
//         console.log('Matched');
//     } else {
//         console.log('Not Matched');
//     }
// }

// rightPlace('Str_ng', 'I', 'Strong');
// rightPlace('Str_ng', 'i', 'String');

// function integerAndFloat(num1, num2, num3) {

//     let sum = num1 + num2 + num3;
//     if (sum % 1 === 0) {
//         console.log(`${sum} - Integer`);
//     } else {
//         console.log(`${sum} - Float`);
//     }
// }

// integerAndFloat(9, 100, 1.1);
// integerAndFloat(100, 200, 303);

// function amazingNumbers(num) {

//     let newNumber = num.toString();
//     let sum = 0;
//     let rez = '';

//     for (let i = 0; i < newNumber.length; i++) {
//         sum += Number(newNumber[i]);
//     }

//     if (sum.toString().includes('9')) {
//         rez = 'True';
//     } else {
//         rez = 'False';
//     }

//     console.log(`${num} Amazing? ${rez}`);
// }

// amazingNumbers(1233);
// amazingNumbers(999);

// function gramophone(nameBand, nameAlbum, nameSong) {

//     let durationInSeconds = (nameAlbum.length * nameBand.length) * nameSong.length / 2;
//     let rotations = durationInSeconds / 2.5;

//     console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);
// }

// gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
// gramophone('Rammstein', 'Sehnsucht', 'Engel');

// function requiredReading(numberPages, numberPagesRightForOneHour, numberDays, ) {
//     let allHours = numberPages / numberPagesRightForOneHour;
//     let numberHoursEvreyDay = allHours / numberDays;
//     console.log(numberHoursEvreyDay);
// }

// requiredReading(212, 20, 2);
// requiredReading(432, 15, 4);

// function centuriesToMinutes(centuries) {
//     let years = centuries * 100;
//     let days = Math.trunc(years * 365.2422);
//     let hours = days * 24;
//     let minutes = hours * 60;

//     console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
// }

// centuriesToMinutes(1);
// centuriesToMinutes(5);

// function specialNumbers(num) {

//     let sum = 0;

//     for (let i = 1; i <= num; i++) {
//         i = i.toString();
//         for (let j = 0; j < i.length; j++) {
//             sum += Number(i[j]);
//         }
//         if (sum === 5 || sum === 7 || sum === 11) {
//             console.log(`${sum} -> True`);
//         } else {
//             console.log(`${sum} -> False`);
//         }
//     }
// }

// function specialNumbers(num) {
//     let sum = 0;
//     let result = '';
//     for (let i = 1; i <= num; i++) {
//         i = i.toString();
//         for (let j = 0; j < i.length; j++) {
//             sum += Number(i[j]);
//         }
//         result =
//             sum === 5 ||
//             sum === 7 ||
//             sum === 11;
//         console.log(result ? `${i} -> True` : `${i} -> False`);
//         sum = 0;
//     }
// }

//specialNumbers(15);
//specialNumbers(20);

// function triplesOfLatinLetters(str) {

//     for (let i = 0; i < str; i++) {
//         for (let j = 0; j < str; j++) {
//             for (let k = 0; k < str; k++) {
//                 let letterI = String.fromCharCode(97 + i);
//                 let letterJ = String.fromCharCode(97 + j);
//                 let letterK = String.fromCharCode(97 + k);
//                console.log(`${letterI}${letterJ}${letterK}`)
//             }
//         }
//     }
// }

//triplesOfLatinLetters('3')
//triplesOfLatinLetters('2');

// function sumDigits(num) {

//     let newNumber = num.toString();
//     let sum = 0;

//     for (let i = 0; i < newNumber.length; i++) {
//        sum += Number(newNumber[i]);
//     }

//     console.log(sum);
// }

// sumDigits(245678);
// sumDigits(97561);
// sumDigits(543);

// function charsToString(firstChar, secondChar, thirdChar) {
//     console.log(`${firstChar}${secondChar}${thirdChar}`);
// }

// charsToString('a', 'b', 'c');
// charsToString('%', '2', 'o');
// charsToString('1', '5', 'p');


// function townInfo(townName, population, area) {

//     console.log(`Town ${townName} has population of ${population} and area ${area} square km.`);
// }

// townInfo('Sofia', 1286383, 492);
// townInfo('Plovdiv', 1481353, 512);

// function convertMetersToKilometres(meters) {
//     let kilometers = (meters / 1000).toFixed(2);

//     console.log(kilometers);
// }

// convertMetersToKilometres(1852);
// convertMetersToKilometres(798);


// function poundsToDollars(pounds) {
//     let dollars = (pounds * 1.31).toFixed(3);

//     console.log(dollars);
// }

// poundsToDollars(80);
// poundsToDollars(39);

// function reversedChars(a, b, c) {

//     console.log(`${c} ${b} ${a}`);
// }

// reversedChars('A', 'B', 'C');
// reversedChars('1', 'L', '&');

// function lowerOrUpper(char) {
//     if(char === char.toUpperCase()) {
//         console.log('upper-case');
//     } else if (char === char.toLowerCase()) {
//         console.log('lower-case');
//     }
// }

// lowerOrUpper('L');
// lowerOrUpper('f');

// function calculator(num1, operator, num2) {
//     sum = 0;

//     if (operator === '+') {
//         sum = num1 + num2;
//     } else if (operator === '-') {
//         sum = num1 - num2
//     } else if (operator === '/') {
//         sum = num1 / num2;
//     } else if (operator === '*') {
//         sum = num1 * num2;
//     }

//     console.log(sum.toFixed(2));
// }

// calculator(5, '+', 10);
// calculator(25.5, '-', 3);

// function gladiatorExpenses(countLost, helmetPrice, swordPrice, shieldPrice, armorPrice) {

//     let sumLost = 0;
//     let brokenHelmet = 0;
//     let brokenSword = 0;
//     let brokenShield = 0;
//     let brokenArmor = 0;
//     for (let i = 1; i <= countLost; i++) {
//         sumLost++;
//         if (sumLost % 2 === 0) {
//             brokenHelmet++;
//         }
//         if (sumLost % 3 === 0) {
//             brokenSword++;
//         }
//         if (sumLost % 6 === 0) {
//             brokenShield++;
//             if (brokenShield % 2 === 0) {
//                 brokenArmor++;
//             }
//         }
//     }
//     let sumHelemt = brokenHelmet * helmetPrice;
//     let sumSword = brokenSword * swordPrice;
//     let sumShield = brokenShield * shieldPrice;
//     let sumArmor = brokenArmor * armorPrice;
//     let expenses = sumHelemt + sumSword + sumShield + sumArmor;

//     console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);

// }

// gladiatorExpenses(7, 2, 3, 4, 5);
// gladiatorExpenses(23, 12.50, 21.50, 40, 200);

// function spiceMustFlow(startingYield) {

//     let countDay = 0;
//     let amount = 0;
//     let totalAmount = 0;

//     while (startingYield >= 100) {
//         countDay++;
//         amount = startingYield - 26;
//         totalAmount += amount;
//         startingYield -= 10;
//     }

//     totalAmount -= 26;
//     if (totalAmount < 0) {
//         totalAmount = 0;
//     }

//     console.log(countDay);
//     console.log(totalAmount);
// }

// spiceMustFlow(111);
// spiceMustFlow(450);

// function digitsWithWords(word) {

//     let rez;
//     switch (word) {
//         case 'one': rez = 1; break;
//         case 'two': rez = 2; break;
//         case 'three': rez = 3; break;
//         case 'four': rez = 4; break;
//         case 'five': rez = 5; break;
//         case 'six': rez = 6; break;
//         case 'seven': rez = 7; break;
//         case 'eight': rez = 8; break;
//         case 'nine': rez = 9; break;
//         case 'zero': rez = 0; break;
//     }
//     console.log(rez);
// }

// digitsWithWords('nine');
// digitsWithWords('two');
// digitsWithWords('zero');

// function primeNumberChecker(num) {

// }

// primeNumberChecker(7);
// primeNumberChecker(8);
// primeNumberChecker(81);


// function cone(radius, height) {

//     let volume = 0;
//     let totalSurfaceArea = 0;
//     let forminTtheCone = 0;
//     let pi = Math.PI;
//     let radiusSecondDegree = Math.pow(radius, 2);
//     let heightSecondDegree = Math.pow(height, 2);

//     volume = 1/3 * pi * radiusSecondDegree * height;
//     forminTtheCone = Math.sqrt(radiusSecondDegree + heightSecondDegree);
//     totalSurfaceArea = pi * radius * (radius + forminTtheCone);

//     console.log(`volume = ${volume.toFixed(4)}`);
//     console.log(`area = ${totalSurfaceArea.toFixed(4)}`);
// }

// cone(3, 5);
// cone(3.3, 7.8);


// function biggestOfThreeNumbers(num1, num2, num3) {
//     console.log(Math.max(num1, num2, num3));
// }

// biggestOfThreeNumbers(-2, 7, 3);
// biggestOfThreeNumbers(130, 5, 99);
// biggestOfThreeNumbers(43, 43.2, 43.1);
// biggestOfThreeNumbers(2, 2, 2);


// function binaryToDecimal(binary) {

//     let decimal = parseInt(binary, 2);
//     console.log(decimal);
// }

// binaryToDecimal(`00001001`);
// binaryToDecimal(`11110000`);

function chessBoard(num) {

    let numSize = Number(num);
    let colorB = 'black';
    let colorW = 'white';
    console.log('<div class="chessboard">');

    for (let i = 1; i <= numSize; i++) {
        console.log('  <div>');
        if (i % 2 === 0) {
            for (let j = 1; j <= numSize; j++) {
                if (j % 2 === 0) {
                    console.log(`    <span class=${colorB}></span>`);
                } else {
                    console.log(`    <span class=${colorW}></span>`);
                }
            }
        } else {
            for (let j = 1; j <= numSize; j++) {
                if (j % 2 === 0) {
                    console.log(`    <span class=${colorW}></span>`);
                } else {
                    console.log(`    <span class=${colorB}></span>`);
                }
            }
        }
        console.log('  </div>');
    }
}

chessBoard(3);


// function triangleArea(a, b, c) {

//     let semiPerimeterTriangle = (a + b + c) / 2;
//     let areaTriangle = Math.sqrt(semiPerimeterTriangle * (semiPerimeterTriangle - a)
//         * (semiPerimeterTriangle - b) * (semiPerimeterTriangle - c));

//     console.log(areaTriangle);

// }
// triangleArea(2, 3.5, 4);
// triangleArea(3, 5.5, 4);