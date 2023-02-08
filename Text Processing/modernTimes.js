function modernTimes(input) {

    let pattern = /#[a-zA-Z]+/g;
    let match = pattern.exec(input);

    while (match !== null) {

        let arrayMatch = match[0].split('');
        let firstElement = arrayMatch.shift();
        arrayMatch = arrayMatch.join('')
        
        console.log(arrayMatch);

        match = pattern.exec(input);
    }
}

modernTimes('Nowadays everyone uses # to tag a #spe99cial word in #socialMedia');
//modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');