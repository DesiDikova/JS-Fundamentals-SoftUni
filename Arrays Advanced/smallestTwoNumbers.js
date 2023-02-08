/*
function smallestTwoNumbers(array) {
    
    //сортиране на масива в нарастващ ред
    let smallestNumbers = array.sort((a, b) => a - b);

    //взимане на първите два елемента от масива
    smallestNumbers = array.slice(0, 2);

    //отпечатване на резултата
    console.log(smallestNumbers.join(' '));
    
} */

arraysmallestTwoNumbers => arraysmallestTwoNumbers
                            .sort((a, b) => a - b)
                            .slice(0, 2)
                            .join(' ')

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);

