function passwordValidator(input) {

    //Правилата за паролата са:
    //• Трябва да има поне 8 знака 
    //• Състои се само от букви, цифри и долна черта - "_" 
    //• Трябва да има поне една главна буква 
    //• Трябва да има поне една малка буква 
    //• Трябва да има поне една цифра

    let pass = input.shift();
    let end = input.pop();
    let passL = pass.length;
    
    for (let element of input) {
        let tokens = element.split(' ');
        let command = tokens[0];

        if ((command !== 'Make') && (command !== 'Insert') && (command !== 'Replace') &&
            (command !== 'Validation')) {
            continue;
        }

        //Заменете буквата в дадения индекс с главна, след което отпечатайте паролата. 
        if (command === 'Make') {
            let currentCommand = tokens[1]
            let index = Number(tokens[2]);

            if (currentCommand === 'Upper') {

                // let firstElement = pass.substring(0, index);
                // let secondElement = pass.substring(index + 1);
                let deleted = pass.substring(index, index + 1);
                let upperChar = deleted.toUpperCase();

                pass = pass.replace(deleted, upperChar); //firstElement.concat(upperChar).concat(secondElement);

                console.log(pass);
            }

            if (currentCommand === 'Lower') {

                // let firstElement = pass.substring(0, index);
                // let secondElement = pass.substring(index + 1);
                let deleted = pass.substring(index, index + 1);
                let lowerChar = deleted.toLowerCase();

                pass = pass.replace(deleted, lowerChar); //firstElement.concat(lowerChar).concat(secondElement);

                console.log(pass);
            }
        }

        //Вмъква дадения символ на дадения индекс в низа, след което отпечатва паролата. 
        //Ако индексът не е валиден, игнорирайте командата.
        if (command === 'Insert') {
            let index = Number(tokens[1]);
            let char = tokens[2];

            if (index >= 0 && index <= passL) {
                let firstElement = pass.substring(0, index);
                let secondElement = pass.substring(index);

                pass = firstElement.concat(char).concat(secondElement);
                console.log(pass);
            } else {
                break;
            }
        }

        //Вземете ASCII стойността на дадения символ. 
        //Сумирайте стойността му с дадената стойност 
        //и заменете всички срещания на char с новия символ, 
        //съответстващ на резултата от сумата в ASCII таблицата. 
        //Отпечатайте паролата. 
        //Ако знакът не е в паролата, игнорирайте командата.
        if (command === 'Replace') {
            let char = tokens[1];
            let value = Number(tokens[2]);

            if (pass.includes(char)) {

                let numberChar = char.charCodeAt();
                let sumChar = numberChar + value;
                let newChar = String.fromCharCode(sumChar);

                pass = pass.split(char).join(newChar);

                console.log(`....${numberChar}`)
                console.log(`....${newChar}`)
                console.log(pass);
            } else {
                break;
            }
        }

        //Проверете защо паролата не е валидна.
        if (command === 'Validation') {

            let nonChar = /\W/gm; //трябва да съдържа само букви (главни , малки), цифри и долна черта
            let upperCase = /[A-Z]/gm; //трябва да съдържа поне една главна буква
            let lowerCase = /[a-z]/gm; //трябва да съдържа поне една малка буква
            let number = /[0-9]/gm; //трябва да съдържа поне една цифра

            let matchnonChar = pass.match(nonChar);
            let matchupperCase = pass.match(upperCase);
            let matchlowerCase = pass.match(lowerCase);
            let matchNumber = pass.match(number);

            if (passL < 8) {
                console.log(`Password must be at least 8 characters long!`);
            }

            if (matchnonChar) {
                console.log(`Password must consist only of letters, digits and _!`);
            }

            if (!matchupperCase) {
                console.log(`Password must consist at least one uppercase letter!`);
            }

            if (!matchlowerCase) {
                console.log(`Password must consist at least one lowercase letter!`);
            }

            if (!matchNumber) {
                console.log(`Password must consist at least one digit!`);
            }
        }
    }
}

passwordValidator([
    'invalidpassword*',
    'Add 2 p',
    'Replace i -50',
    'Replace * 10',
    'Make Upper 2',
    'Validation',
    'Complete'
]);
// passwordValidator([
//     '123456789',
//     'Insert 3 R',
//     'Replace 5 15',
//     'Validation',
//     'Make Lower 3',
//     'Complete'
// ]);
