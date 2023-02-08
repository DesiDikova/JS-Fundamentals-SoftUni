function theAngryCat(arr, index, command) {

    let leftArr = arr.slice(0, index);
    let rightArr = arr.slice(index + 1);
    let entryPoint = arr[index];

    let leftSum = 0;
    let rightSum = 0;

    //ако командата е 'cheap' - правя два forof цикъла, в които: 
    if (command === 'cheap') {

        for (let leftElement of leftArr) {
            //взимам всички елементи по - малки от entryPoint от лявия масив и ги събирам в променливата leftSum
            if (leftElement < entryPoint) {
                leftSum += leftElement;
            }
        }

        for (let rightElement of rightArr) {
            //взимам всички елементи по - малки от entryPoint от десния масив и ги събирам в променливата rightSum
            if (rightElement < entryPoint) {
                rightSum += rightElement;
            }
        }
        //ако командата е 'expensive' - правя два forof цикъла, в които: 
    } else if (command === 'expensive') {

        for (let leftElement of leftArr) {
            //взимам всички елементи по - големи (или равни) от entryPoint от лявия масив и ги събирам в променливата leftSum
            if (leftElement >= entryPoint) {
                leftSum += leftElement;
            }
        }

        for (let rightElement of rightArr) {
            //взимам всички елементи по - големи (или равни) от entryPoint от десния масив и ги събирам в променливата rightSum
            if (rightElement > + entryPoint) {
                rightSum += rightElement;
            }
        }
    }
    //ако лявата сума е по - голяма или равна на дясната сума - нека се отпечата лявата сума
    if (leftSum > rightSum || leftSum === rightSum) {
        console.log(`Left - ${leftSum}`);
        //ако дясната сума е по - голяма от лявата сума - нека се отпечата дясната сума        
    } else if (rightSum > leftSum) {
        console.log(`Right - ${rightSum}`);
    }
}

theAngryCat([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, "cheap");
theAngryCat([5, 10, 12, 5, 4, 20], 3, "cheap");
theAngryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");