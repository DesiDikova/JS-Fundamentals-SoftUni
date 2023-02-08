// function passwordReset(input) {

//     let password = input.shift();
//     let validPassword = '';

//     for (let line of input) {
//         let tokens = line.split(' ');
//         let command = tokens[0];

//         if (command === 'Done') {
//             console.log(`Your password is: ${validPassword}`);
//             break;
//         }

//         //Взимаме само знаците с нечетни индекси и ги свързваме, за са получим новата необработена парола
//         if (command === 'TakeOdd') {

//             // for (let i = 0; i < password.length; i += 2) {
//             //     let oddIndex = password[i + 1];
//             //     validPassword += oddIndex;
//             // }

//             for (let i = 0; i < password.length; i++) {
//                 if (i % 2 !== 0) {
//                     validPassword += password[i];
//                 }   
//             }

//             console.log(validPassword);
//         }

//         //Получаваме подниза с дадена дължина, започващ от дадения индекс от паролата и премахва първото му срещане 
//         if (command === 'Cut') {
//             let index = Number(tokens[1]);
//             let length = Number(tokens[2]);

//             let deleted = validPassword.substring(index, index + length);
//             validPassword = validPassword.replace(deleted, '');

//             console.log(validPassword);
//         }

//         //Ако необработената парола съдържа дадения подниз, замества всички негови срещания с дадения заместващ текст
//         if (command === 'Substitute') {
//             let substring = tokens[1];
//             let substitute = tokens[2];

//             if (validPassword.includes(substring)) {

//                 validPassword = validPassword.split(substring).join(substitute);

//                 console.log(validPassword); 
//             } else {
//                 console.log(`Nothing to replace!`);
//             }
//         } 
//     }
// }


//............................

function passwordReset(input) {

    let password = input.shift();

    for (let line of input) {

        if (line === 'Done') {
            break;
        }

        let [command, paramOne, paramTwo] = line.split(' ');

        //Взимаме само знаците с нечетни индекси и ги свързваме, за са получим новата необработена парола
        if (command === 'TakeOdd') {

            password = [...password].filter((el, index) => { return index % 2 !== 0; }).join('');
            console.log(password);
        }

        //Получаваме подниза с дадена дължина, започващ от дадения индекс от паролата и премахва първото му срещане 
        if (command === 'Cut') {
            let index = Number(paramOne);
            let length = Number(paramTwo);

            let deleted = password.substring(index, index + length);
            password = password.replace(deleted, '');

            console.log(password);
        }

        //Ако необработената парола съдържа дадения подниз, замества всички негови срещания с дадения заместващ текст
        if (command === 'Substitute') {
            let substring = paramOne;
            let substitute = paramTwo;

            if (password.includes(substring)) {

                password = password.split(substring).join(substitute);

                console.log(password);
            } else {
                console.log(`Nothing to replace!`);
            }
        }
    }
    console.log(`Your password is: ${password}`);
}



passwordReset([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
]);
// passwordReset([
//     "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
//     "TakeOdd",
//     "Cut 18 2",
//     "Substitute ! ***",
//     "Substitute ? .!.",
//     "Done"
// ]);

