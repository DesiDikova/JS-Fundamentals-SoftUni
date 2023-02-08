function houseParty(array) {
    //създаваме нов масив, в който ще добавяме имената
    let arrayGuests = [];

    //създаваме forof цикъл, в който взимаме всеки елемент(стринг) от главния масив 
    //и превръщаме всеки елемент(стрин) в отделен масив
    for (let command of array) {
        let arrayCommand = command.split(' ');
        let arrayCommandL = arrayCommand.length;
        let name = arrayCommand[0]; //името във всеки отделен масив се намира на 0-я индекс     

        //ако дължината на масива е равна на 3
        if (arrayCommandL === 3) {
            //и ако в новия масив не се съдържа името
            if (!arrayGuests.includes(name)) {
                arrayGuests.push(name); //добавяме името в новия масив
            } else {
                //ако името се съдържа в новия масива - отпечатваме следния текст:
                console.log(`${name} is already in the list!`);
            }
            //ако дължината на масива е равна на 4
        } else if (arrayCommandL === 4) {
            //и ако в новия масив се повтаря името, трябва да го изрежем (чрез метода splice - изрязваме, 
            //а чрез метода indexOf - намираме на кой индекс се намира повтарящото име)
            if (arrayGuests.includes(name)) {
                arrayGuests.splice(arrayGuests.indexOf(name), 1);
            } else {
                //ако името не се съдържа в новия масив - отпечатваме следния текст
                console.log(`${name} is not in the list!`);
            }
        }
    }
    //отпечатваме резултата от новия масив - всяко име на нов ред
    console.log(arrayGuests.join('\n'));
}

houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);
