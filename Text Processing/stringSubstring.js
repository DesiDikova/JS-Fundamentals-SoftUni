// function stringSubstring(word, text) {
    
//     let array = text.split(' ');
// //ако думата (в малки букви) е равна на дума (в малки букви) от текса - отпечатай думата; ако не - думата не съществува
//     for (let element of array) {
//         if (element.toLowerCase() === word.toLowerCase()) { 
//             console.log(word);
//             return;
//         } 
//     }
//     console.log(`${word} not found!`);
// }


function stringSubstring(word, text) {
    
    let array = text.split(' ');

    for (let element of array) {
        if (element.toLowerCase().includes(word.toLowerCase())) {
            console.log(word);
            return;
        } 
    }
    console.log(`${word} not found!`);
}

stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');