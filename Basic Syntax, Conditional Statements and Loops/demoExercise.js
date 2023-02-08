function nextDay(num1, num2, num3) {
    let year = num1;
    let month = num2;
    let day = num3;
    let nextDay = new Date();
    nextDay.setFullYear(year, month - 1, day + 1);
    console.log(nextDay);

    
}



nextDay(2016, 9, 30); 
nextDay(2020, 3, 24);


// function ages(input) {
//     let ages = input;

//     if (ages < 0) {
//         console.log(`out of bounds`);
//     } else if (ages >= 0 && ages <= 2) {
//         console.log(`baby`);        
//     } else if (ages <= 13) {
//         console.log(`child`);
//     } else if (ages <= 19) {
//         console.log(`teenager`);
//     } else if (ages <= 65) {
//         console.log(`adult`);
//     } else if (ages >= 65) {
//         console.log(`elder`);
//     } 
// }

// ages(20);
// ages(1);
// ages(100);
// ages(-1);

// function rounding (num1, num2) {
//     let number = num1;
//     let precision = num2;

//     if(precision > 15) precision = 15;

//     let correctNum = number.toFixed(precision)
//     console.log(parseFloat(correctNum));
// }

// rounding(3.1415926535897932384626433832795, 2);
// rounding(10.5, 3);

// function division(num) {
//     let number = num;

//     if (number % 10 === 0) {
//         console.log(`The number is divisible by 10`);
//     } else if (number % 7 === 0) {
//         console.log(`The number is divisible by 7`);
//     } else if (number % 6 === 0) {
//         console.log(`The number is divisible by 6`);
//     } else if (number % 3 === 0) {
//         console.log(`The number is divisible by 3`);
//     } else if (number % 2 === 0) {
//         console.log(`The number is divisible by 2`);
//     } else {
//         console.log(`Not divisible`);
//     }
// }

// division(30);
// division(15);
// division(12);
// division(1643);

// function vacation(num1, num2, num3) {
//     let groupOfPeople = num1;
//     let typeOfTheGroup = num2;
//     let day = num3;

//     let sum = 0;

//     if (typeOfTheGroup === 'Business' && groupOfPeople >= 100) {
//         groupOfPeople -= 10;
//     }
//     switch (day) {
//         case 'Friday':
//             if (typeOfTheGroup === 'Students') {
//                 sum = groupOfPeople * 8.45;
//             } else if (typeOfTheGroup === 'Business') {
//                 sum = groupOfPeople * 10.90;
//             } else if (typeOfTheGroup === 'Regular') {
//                 sum = groupOfPeople * 15;
//             }
//             break;
//         case 'Saturday':
//             if (typeOfTheGroup === 'Students') {
//                 sum = groupOfPeople * 9.80;
//             } else if (typeOfTheGroup === 'Business') {
//                 sum = groupOfPeople * 15.60;
//             } else if (typeOfTheGroup === 'Regular') {
//                 sum = groupOfPeople * 20;
//             }
//             break;
//         case 'Sunday':
//             if (typeOfTheGroup === 'Students') {
//                 sum = groupOfPeople * 10.46;
//             } else if (typeOfTheGroup === 'Business') {
//                 sum = groupOfPeople * 16;
//             } else if (typeOfTheGroup === 'Regular') {
//                 sum = groupOfPeople * 22.50;
//             }
//             break;
//     }
//     if (typeOfTheGroup === 'Students' && groupOfPeople >= 30) {
//         sum *= 0.85;
//     }
//     if (typeOfTheGroup === 'Regular ' && groupOfPeople >= 10 && groupOfPeople <= 20){
//         sum *= 0.95;
//     }
//     console.log(`Total price: ${sum.toFixed(2)}`);
// }

// vacation(30, "Students", "Sunday");
// vacation(40, "Regular", "Saturday");
// vacation(100, "Business", "Friday");

// function leapYear(num) {
//     let year = num;

//     if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
//         console.log(`yes`);
//     } else {
//         console.log(`no`);
//     }
// }

// leapYear(1984);
// leapYear(2003);
// leapYear(4)

// function printAndSum(num1, num2) {
//     let start = num1;
//     let end = num2;
//     let sum = 0;
//     let output = '';

//     for (let i = start; i <= end; i++) {
//         sum += i; 
//         output += `${i} `;   
//     }
//     console.log(output);
//     console.log(`Sum: ${sum}`);
// }

// printAndSum(5, 10);
// printAndSum(0, 26);
// printAndSum(50, 60);

// function triangleOfNumbers(num) {
//     let n = num;

//     for (let i = 1; i <= n; i++) {
//         console.log(`${i} `.repeat(i));
//     }
// }

// triangleOfNumbers(3);
// triangleOfNumbers(5);
// triangleOfNumbers(6);

// function multiplicationTable(num) {
//     let number = num;

//     for (let i = 1; i <= 10; i++) {
//         let product = number * i;
//         console.log(`${number} X ${i} = ${product}`);  
//     }
// }

// multiplicationTable(5);
// multiplicationTable(2);

// function login(input) {
//     let username = input[0];
//     let count = 0;

//     for (let i = 1; i < input.length; i++) {
//         count++;
//         let usernameReverse = input[i];
//         usernameReverse = usernameReverse.split('');
//         usernameReverse = usernameReverse.reverse();
//         usernameReverse = usernameReverse.join('');
//         if (count > 3) {
//             console.log(`User ${username} blocked!`);
//             break;
//         }
//         if (username !== usernameReverse) {
//             console.log(`Incorrect password. Try again.`);
//         } else {
//             console.log(`User ${username} logged in.`);
//         }
//     }
// }

//login(['Acer', 'login', 'go', 'let me in', 'recA'])
//login(['momo','omom']);
//login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);

// function thePyramidOfKingDjoser(num1, num2) {
//     let base = num1;
//     let increment = num2;
//     let countStone = 0; 
//     let finishStone = 0;
//     let countMarble = 0; 
//     let finishMarble = 0;
//     let countLapisLazuli = 0; 
//     let finishLapisLazuli = 0;
//     let finishGold = 0; 
//     let countSteps = 0; 
//     let finishHeight = 0;

//     while (base > 2) {
//         countMarble = (base * 4) - 4;
//         countStone = (base * base) - countMarble;
//         finishStone += countStone; 
//         countSteps++;

//         if(countSteps % 5 === 0) {
//             countLapisLazuli += countMarble;
//         } else {
//             finishMarble += countMarble;
//         }
        
//         base -= 2;
//     }
//     countSteps++;

//     finishStone = Math.ceil(finishStone * increment);
//     finishMarble = Math.ceil(finishMarble * increment);
//     finishLapisLazuli = Math.ceil(countLapisLazuli * increment);
//     finishGold = Math.ceil(base * base * increment);
//     finishHeight = Math.floor(countSteps * increment);

//     console.log(`Stone required: ${finishStone}`);
//     console.log(`Marble required: ${finishMarble}`);
//     console.log(`Lapis Lazuli required: ${finishLapisLazuli}`);
//     console.log(`Gold required: ${finishGold}`);
//     console.log(`Final pyramid height: ${finishHeight}`)      
// }

//  thePyramidOfKingDjoser(11,1);
//  thePyramidOfKingDjoser(11, 0.75);
//  thePyramidOfKingDjoser(12, 1);
//  thePyramidOfKingDjoser(23, 0.5);


// function bitcoinMining(input) {

//     let sumGold = 0;
//     let totalSum = 0;
//     let countBitcoins = 0;
//     let countDay = 0;
//     let dayOfTheFirstPurchasedBitcoin = 0;

//     for (let i = 0; i < input.length; i++) {
//         let countGold = Number(input[i]); 
//         countDay++; 
        
//         if (countDay % 3 === 0) { 
//             countGold *= 0.70;
//         }

//         sumGold = countGold * 67.51; // 6751, 13502, 14177.10
//         totalSum += sumGold;

//         while (totalSum >= 11949.16){
//             countBitcoins++;
//             totalSum -= 11949.16;
//             if (dayOfTheFirstPurchasedBitcoin === 0) {
//                 dayOfTheFirstPurchasedBitcoin = countDay;
//             }
//         }
//     }
//     if (countBitcoins >= 1){
//         console.log(`Bought bitcoins: ${countBitcoins}`);
//         console.log(`Day of the first purchased bitcoin: ${dayOfTheFirstPurchasedBitcoin}`);
//     } else {
//         console.log(`Bought bitcoins: ${countBitcoins}`);
//     }

//     console.log(`Left money: ${totalSum.toFixed(2)} lv.`)
// }

// bitcoinMining([100, 200, 300]);
// bitcoinMining([50, 100]);
// bitcoinMining([3124.15, 504.212, 2511.124]);

