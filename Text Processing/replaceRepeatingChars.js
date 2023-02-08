// function replaceRepeatingChars(string) {

//     let array = string.split('');
//     let newArray = [];
//     let arrayLetters = [];

//     //нека заменим всяка последователност от едни и същи букви с една съответстваща буква.
//     for (let i = 0; i < array.length; i++) {
//         let letterFirst = array[i];
//         let letterSecond = array[i + 1];

//         if (letterFirst === letterSecond) {
//             newArray.push(letterFirst);
//         } else {
//             arrayLetters.push(letterFirst[0]);

//             newArray = [];
//         }
//     }
//     console.log(arrayLetters.join(''));

// }




function replaceRepeatingChars(string) {

    let text = '';

    //нека заменим всяка последователност от едни и същи букви с една съответстваща буква.
    for (let i = 0; i < string.length; i++) {
        let letterFirst = string[i];
        let letterSecond = string[i + 1];

        if (letterFirst !== letterSecond) {
            text += letterFirst;
        }
    }
    
    console.log(text);
}


replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');
replaceRepeatingChars('a');