function sorting(array) {

    let newArray = [];
    array.sort((a, b) => b - a); //подреждаме стойностите в намаляващ ред
    
    while (array.length > 0) {
        let bigNumber = array.shift() //взимаме най-голямото число
        newArray.push(bigNumber); //добавяме го в новия масив
        let smallNumber = array.pop(); //взимаме най-малкото число
        newArray.push(smallNumber); //добавяме го в новия масив
    }

    //отпечатваме резултата на един ред
    console.log(newArray.join(' '));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
//sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
