function censoredWords(text, word) {

//---- 1-ви вариант
    let newText = text.split(word);
    let rez = newText.join('*'.repeat(word.length));
    console.log(rez);

//------ 2-ри вариант
    // while (text.indexOf(word) >= 0) {
    //     text = text.replace(word, '*'.repeat(word.length));
    // }
    // console.log(text);
}

censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');