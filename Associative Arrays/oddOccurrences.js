function oddOccurrences(input) {

    //създавам празен мап
    let result = new Map();

    //създавам масив от елементи
    let arr = input.split(' ');

    //1: цикъл, в който ще взимам всеки елемент и ще сетна стойността на 1-ца; 2: превръщам всички думи с малки букви
    for (let currentElement of arr) {
        currentElement = currentElement.toLowerCase();

        let sumWord = 1;
        //проверявам елемента, съдържа ли се в мап-а
        if (result.has(currentElement)) {
            result.set(currentElement, sumWord += result.get(currentElement));
        }
        result.set(currentElement, sumWord);

    }
    //мап-а го превъръщам в масив
    let arrayElements = Array.from(result);

    let res = '';
    //проверявам сумата на елементите нечетна ли е - ако е такава към res добави елемента и интервал
    for (let [element, sum] of arrayElements) {
        if (sum % 2 !== 0) {
            res += element + ' ';  
        }
    }

    //отпечатване на резултата
    console.log(res);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');