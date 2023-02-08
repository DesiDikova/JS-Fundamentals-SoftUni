function guineaPig(array) {

    let oneKilogramsInGrams = 1000;
    let foodGrams = Number(array[0]) * oneKilogramsInGrams;
    let hayGrams = Number(array[1]) * oneKilogramsInGrams;
    let coverGrams = Number(array[2]) * oneKilogramsInGrams;
    let kilogramsInGrams = Number(array[3]) * oneKilogramsInGrams;
    let quantityDays = 1;

    while (quantityDays <= 30) {
        foodGrams -= 300;
        if (quantityDays % 2 === 0) {
            let percentageHay = foodGrams - (foodGrams * 0.95);
            hayGrams -= percentageHay;
        }
        if (quantityDays % 3 === 0) {
            let percentageConer = kilogramsInGrams / 3;
            coverGrams -= percentageConer;
        }
        if (foodGrams < 0 || hayGrams < 0 || coverGrams < 0) {
            console.log(`Merry must go to the pet store!`);
            return;
        }
        quantityDays++;
    }

    let foodKilograms = foodGrams / oneKilogramsInGrams;
    let hayKilograms = hayGrams / oneKilogramsInGrams;
    let coverKilograms = coverGrams / oneKilogramsInGrams;

    console.log(`Everything is fine! Puppy is happy! Food: ${foodKilograms.toFixed(2)}, Hay: ${hayKilograms.toFixed(2)}, Cover: ${coverKilograms.toFixed(2)}.`);
}
guineaPig(["10", "5", "5.2", "1"]);
//guineaPig(["1", "1.5", "3", "1.5"]);
//guineaPig(["9", "5", "5.2", "1"]);
