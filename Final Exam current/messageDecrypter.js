function messageDecrypter(input) {

    //Преди и след него няма нищо друго
    //Започва с таг, който е заобиколен от '$' или '%' (но не и от двете едновременно), 
    //самият таг трябва да е дълъг минимум 3 знака, да започва с главна буква, последвана само от малки букви
    //След тага има двоеточие и едно бяло пространство
    //Има 3 групи, състоящи се от числа между '[' и ']', последвани от вертикална черта ('|')

    let start = Number(input.shift());
    let pattern = /^([$%])([A-Z][a-z]{2,})\1: \[(\d+)\]\|\[(\d+)\]\|\[(\d+)\]\|$/;

    for (let element of input) {
        let match = pattern.exec(element);

        if (match !== null) {
            let firstChar = String.fromCharCode(match[3]);
            let secondChar = String.fromCharCode(match[4]);
            let threeChar = String.fromCharCode(match[5]);

            console.log(firstChar + secondChar + threeChar);
        }

        console.log(`Valid message not found!`);
    }
}

messageDecrypter([
    '4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|'
]);
// messageDecrypter([
//     '3',
//     'This shouldnt be valid%Taggy%: [118]|[97]|[108]|',
//     '$tAGged$: [97][97][97]|',
//     '$Request$: [73]|[115]|[105]|true',
// ])