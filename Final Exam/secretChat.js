function secretChat(input) {

    let message = input.shift();

    for (let line of input) {
        let tokens = line.split(':|:')
        let command = tokens[0];

        if (command === 'Reveal') {

            console.log(`You have a new text message: ${message}`);
        }

        //Вмъква един интервал в дадения индекс
        if (command === 'InsertSpace') {
            let index = Number(tokens[1]);
            let firstPart = message.substring(0, index);
            let secondPart = message.substring(index);

            message = firstPart.concat(' ').concat(secondPart);

            console.log(message);
        }

        //Ако се съдържа дадения подниз (само първото срещане), изрязваме го, обръщаме го и го добавяме в края на съобщението. 
        //Ако не -  отпечатваме "грешка".
        if (command === 'Reverse') {
            let substring = tokens[1];

            if (message.includes(substring)) {
                let index = message.indexOf(substring)
                let firstPart = message.slice(0, index);
                let secondPart = message.slice(index + substring.length); //взимаме от индекса до дължината на стринга
                substring = substring
                    .split('')
                    .reverse()
                    .join('');

                message = firstPart.concat(secondPart).concat(substring);

                console.log(message);
                
            
            } else {

                console.log(`error`);
            }
        }

        //Променяме всички срещания на дадения подниз със заместващия текст
        if (command === 'ChangeAll') {
            let substring = tokens[1];
            let replacement = tokens[2];

            let pattern = new RegExp(substring, 'g');
            message = message.replace(pattern, replacement);

            console.log(message);
        }
    }
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);
// secretChat([
//     'Hiware?uiy',
//     'ChangeAll:|:i:|:o',
//     'Reverse:|:?uoy',
//     'Reverse:|:jd',
//     'InsertSpace:|:3',
//     'InsertSpace:|:7',
//     'Reveal'
// ]);