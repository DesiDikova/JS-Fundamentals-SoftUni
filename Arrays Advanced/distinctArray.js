function distinctArray(array) {
    
    //създавам нов масив, в който ще събирам новите резултати
    let newArray = [];

    let arrayL = array.length;

    //създавам for цикъл, който ще върти по всеки индекс
    for (let i = 0; i < arrayL; i++) {
        //ако в newArray НЕ се съдържа числото, което е от аrray - нека се добави 
        if (!newArray.includes(array[i])) {
            newArray.push(array[i]);
        }  
    }
    //отпечатване на резултата
    console.log(newArray.join(' '));
}

distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);