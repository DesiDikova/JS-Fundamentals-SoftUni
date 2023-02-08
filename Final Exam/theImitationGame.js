function theImitationGame(array) {

    let message = array.shift();

    for (let line of array) {
        let tokens = line.split('|');
        let command = tokens[0];

        if (command === 'Decode') {
            break;
        }

        // премества първите n букви в задната част на съобщението
        if (command === 'Move') {

            let numberOfLetters = Number(tokens[1]);

            let firstPart = message.slice(0, numberOfLetters);
            let secondPart = message.slice(numberOfLetters);
            message = secondPart + firstPart;

            // let firstPart = message.substring(0, numberOfLetters);
            // let secondPart = message.substring(numberOfLetters);
            // message = secondPart.concat(firstPart);
        }

        //вмъква стойност преди дадения индекс
        if (command === 'Insert') {

            let index = Number(tokens[1]);
            let value = tokens[2];

            let firstPart = message.substring(0, index);
            let secondPart = message.substring(index);
            message = firstPart.concat(value).concat(secondPart);
        }

        //променя всички срещания на дадения подниз със заместващия текст
        if (command === 'ChangeAll') {

            let substring = tokens[1];
            let replacement = tokens[2];

            message = message.split(substring).join(replacement);
            
        }
    }

    console.log(`The decrypted message is: ${message}`);
}


// -----------------------------------------------

            //2-ри вариант
// function theImitationGame(input) {
//     let message = input.shift();

//     let line = input.shift();

//     while (line != "Decode") {
//         let tokens = line.split("|");

//         let command = tokens[0];

//         // премества първите n букви в задната част на съобщението
//         if (command === 'Move') {

//             let numberOfLetters = Number(tokens[1]);

//             let firstPart = message.substring(0, numberOfLetters);
//             let secondPart = message.substring(numberOfLetters);
//             message = secondPart.concat(firstPart);
//         }

//         //вмъква стойност преди дадения индекс
//         if (command === 'Insert') {

//             let index = Number(tokens[1]);
//             let value = tokens[2];

//             let firstPart = message.substring(0, index);
//             let secondPart = message.substring(index);
//             message = firstPart.concat(value).concat(secondPart);
//         }

//         //променя всички срещания на дадения подниз със заместващия текст
//         if (command === 'ChangeAll') {

//             let substring = tokens[1];
//             let replacement = tokens[2];

//             message = message.split(substring).join(replacement);
//         }

//         line = input.shift();
//     }

//     console.log(`The decrypted message is: ${message}`);
// }

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
]);