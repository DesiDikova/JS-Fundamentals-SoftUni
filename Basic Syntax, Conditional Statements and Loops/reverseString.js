function reverseString(input) {
    let word = input;
    let array = word.split('');
    let reverseArray = array.reverse();
    console.log(reverseArray.join(''));

}

reverseString('Hello');
reverseString('SoftUni');
reverseString('1234');