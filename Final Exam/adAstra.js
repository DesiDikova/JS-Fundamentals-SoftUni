console.log('works')

function adAstra(input) {

    //информацията за храната:
    // - Ще бъде заобиколена от "|" или "#" (само едно от двете) в следния модел:
    // #{име на елемент}#{срок на годност}#{калории}# или |{име на елемент}|{срок на годност}|{калории}|
    // - Името на елемента ще съдържа само малки и главни букви и интервал
    // - Срокът на годност ще има следния модел: „{ден}/{месец}/{година}“, а денят, месецът и годината ще бъдат точно две цифри
    // - Калориите ще бъдат цяло число между 0-10000

    let text = input[0];
    let pattern = /([#|]{1})(?<itemName>[A-Za-z\s]+)\1(?<expiration>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/gm;

    let match = pattern.exec(text);

    let caloriesDay = 2000;
    let sumCalories = 0;
    let days = 0;
    let infoFood = [];

    while (match !== null) {

        let food = match[2];
        let data = match[3];
        let calories = Number(match[4]);

        //изчислявам сумата на калориите
        sumCalories += calories;

        //събирам в масива - храната, датата и калориите
        infoFood.push(`Item: ${food}, Best before: ${data}, Nutrition: ${calories}`);

        match = pattern.exec(text);
    }

    //изчислявам и отпечатвам дните, за които ще ми стигне наличната храна
    days = sumCalories / caloriesDay;
    console.log((`You have food to last you for: ${Math.floor(days)} days!`));
  	
  	//отпечатвам масива със събраната информация
    console.log(infoFood.join('\n'));
}

