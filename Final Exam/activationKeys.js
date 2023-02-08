function activationKeys(input) {

    let key = input.shift();

    for (let line of input) {

        if (line === 'Generate') {
            break;
        }

        let tokens = line.split('>>>');
        let command = tokens[0];

        //Изтрива знаците между началния и крайния индекс 
        if (command === 'Slice') {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);

            let start = key.substring(0, startIndex);
            let end = key.substring(endIndex);
            key = start + end;

            console.log(key);
        }

        //Променя подниза между дадените индекси
        if (command === 'Flip') {
            let letters = tokens[1];
            let startIndex = Number(tokens[2]);
            let endIndex = Number(tokens[3]);

            let deleted = key.substring(startIndex, endIndex);
            if (letters === 'Upper') {
                key = key.replace(deleted, deleted.toUpperCase());

            } else if (letters === 'Lower') {
                key = key.replace(deleted, deleted.toLowerCase());

            }

            console.log(`.....${key}`);
            console.log(`.....${deleted}`);
        }

        //Ако се съдържа дадения подниз
        if (command === 'Contains') {
            let substring = tokens[1];

            if (key.includes(substring)) {
                console.log(`${key} contains ${substring}`);
            } else {

                console.log(`Substring not found!`);
            }
        }
    }

    console.log(`Your activation key is: ${key}`);
}

// activationKeys([
//     "abcdefghijklmnopqrstuvwxyz",
//     "Slice>>>2>>>6",
//     "Flip>>>Upper>>>3>>>14",
//     "Flip>>>Lower>>>5>>>7",
//     "Contains>>>def",
//     "Contains>>>deF",
//     "Generate"
// ]);
activationKeys([
    "134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"
]);
