function blackFlag(array) {

    let days = Number(array[0]);
    let dailyPlunder = Number(array[1]);
    let expectedPlunder = Number(array[2]);
    let sumPlunder = 0;

    //правим фор цикъл, докато стигнем необходимите дни
    for (let i = 1; i <= days; i++) {
        //за всеки ден сумираме дневната плячка
        sumPlunder += dailyPlunder; 
        //на всеки трети ден общата плячка се увеличава с 50% от дневната плячка
        if (i % 3 === 0) {
            sumPlunder += dailyPlunder / 2;
        }
        //на всеки пети ден - общата плячка, намалява с 30%
        if (i % 5 === 0) {
            sumPlunder *= 0.70;
        }
    }
    //сравняваме събраното количество плячка с очакваното количество
    if (sumPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${sumPlunder.toFixed(2)} plunder gained.`)
    } else {
        console.log(`Collected only ${(sumPlunder / expectedPlunder * 100).toFixed(2)}% of the plunder.`);
    }
}

blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);
