function decryptingCommand(input) {

    let string = input.shift();
    let stringL = string.length;

    for (let element of input) {
        let tokens = element.split(' ');
        let command = tokens[0];

        //Заменете всички срещания на {currentChar} с {newChar}, след което отпечатайте текущото съобщение.
        if (command === 'Replace') {
            let currentChar = tokens[1];
            let newChar = tokens[2];
            string = string.split(currentChar).join(newChar);

            console.log(string);
        }

        //проверявам дали индексите са валидни, ако не са - печатам съобщение 'Invalid indexes!'
        //ако са валидни - премахвам подниза от {startIndex} до {endIndex}, след което печатам текущото съобщение.
        if (command === 'Cut') {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);

            if ((startIndex >= 0 && startIndex <= stringL) && (endIndex >= 0 && endIndex <= stringL)) {
                let firstPart = string.substring(0, startIndex);
                let secondPart = string.substring(endIndex + 1);
                let deleted = string.substring(startIndex, endIndex + 1);
                string = firstPart.concat(secondPart);

                console.log(string);
            } else {
                console.log(`Invalid indexes!`);
            }
        }

        //Променяме размера на буквите
        if (command === 'Make') {
            let element = tokens[1];
            //Заменете всички букви с главни букви
            if (element === 'Upper') {
                string = string
                    .split(' ')
                    .map(x => x
                        .toUpperCase())
                    .join();

                console.log(string)
            }
            //Заменете всички букви с малки букви
            if (element === 'Lower') {
                string = string
                    .split(' ')
                    .map(x => x
                        .toLowerCase())
                    .join();

                console.log(string);
            }
        }

        //Проверете дали съобщението съдържа дадения низ.
        //Ако има, отпечатайте: „Message contains {string}“
        //Ако не, отпечатайте: „Message doesn't contain {string}“
        if (command === 'Check') {
            let replaceString = tokens[1];
            if (string.includes(replaceString)) {
                console.log(`Message contains ${replaceString}`);
            } else {
                console.log(`Message doesn't contain ${replaceString}`);
            }
        }

        if (command === 'Sum') {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);

            //Вземете подниза от {startIndex} до {endIndex} и отпечатайте сумата от ASCII стойностите на подниза.
            if ((startIndex >= 0 && startIndex <= stringL) && (endIndex >= 0 && endIndex <= stringL)) {
                let sum = 0;
                let deleted = string.slice(startIndex, endIndex + 1);
                let deletedL = deleted.length;
                for (let i = 0; i < deletedL; i++) {
                    let char = deleted[i].charCodeAt();
                    sum += char;
                }
                console.log(sum);
            } else {    //Ако някой от {startIndex} или {endIndex} е невалиден, отпечатайте: Invalid indexes!
                console.log(`Invalid indexes!`);
            }
        }
    }
}

decryptingCommand([
    "ILikeSharan",
    "Replace a e",
    "Make Upper",
    "Check SHEREN",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"
]);
decryptingCommand([
    "HappyNameDay",
    "Replace p r",
    "Make Lower",
    "Cut 2 23",
    "Sum -2 2",
    "Finish"
]);