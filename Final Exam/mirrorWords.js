function mirrorWords(input) {

    //Скритите двойки думи са:
    //• Заобиколен от "@" или "#" (само един от двата)
    //• Дължина на поне 3 знака (без околните символи)
    //• Състои се само от букви

    let pattern = /(@|#)([A-Za-z]{3,})\1{2}([A-Za-z]{3,})\1/gm;

    let validPairs = 0;
    let mirrorWord = [];

    let match = pattern.exec(input);

    while (match !== null) {

        //изчислявам броя двойки думи
        validPairs++;

        //взимам двойката от думи 
        let firstWord = match[2];
        let secondWord = match[3];

        //обръщам думта на обратно
        let reverseWord = secondWord
        .split('')
        .reverse()
        .join('');

        //сравнявам дали думата обърната на обратно съвпада с другата дума, т.е. има огледална дума
        if (firstWord === reverseWord) {
            mirrorWord.push(`${firstWord} <=> ${secondWord}`);

        } 

        match = pattern.exec(input);
    }

    //ако ИМА валидни двойки думи
    if (validPairs !== 0) {
        console.log(`${validPairs} word pairs found!`);
        //ако НЯМА валидни двойки думи  
    } else {
        console.log(`No word pairs found!`);
    }

    //ако нямам огледални думи
    if (mirrorWord.length > 0) {
        console.log(`The mirror words are:\n${mirrorWord.join(', ')}`)
    } else {
        console.log(`No mirror words!`);
    }
}

mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);