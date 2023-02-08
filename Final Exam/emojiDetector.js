function emojiDetector(input) {

    //Едно емоджи е валидно, когато:
    //• Заобиколен е от 2 знака, или "::" или "**"
    //• Дължината е поне 3 знака (без околните символи)
    //• Започва с главна буква
    //• Продължава само с малки букви

    input = input[0];
    let patternEmoji = /(\:\:|\*\*)([A-Z][a-z][a-z]+)\1/gm;
    let coolThreshold = /\d/gm;

    let matchEmoji = patternEmoji.exec(input);
    let matchCoolThreshold = input.match(coolThreshold);

    let threshold = 1;

    matchCoolThreshold.map(i => threshold *= i);
    console.log(`Cool threshold: ${threshold}`);

    let count = 0;
    let arrayEmoji = [];

    //валидни емоджита
    while (matchEmoji !== null) {

        count++;
        let emoji = matchEmoji[2];
        let validEmoji = matchEmoji[0];

        let sumChar = 0;

        //изчислявам прага на емоджитата
        for (let elem of emoji) {
            let char = elem.charCodeAt();

            sumChar += char;
        }

        if (sumChar >= threshold) {
            arrayEmoji.push(validEmoji);
        }

        matchEmoji = patternEmoji.exec(input);
    }

    console.log(`${count} emojis found in the text. The cool ones are:`);

    console.log(`${arrayEmoji.join('\n')}`);
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
//emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
//emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);