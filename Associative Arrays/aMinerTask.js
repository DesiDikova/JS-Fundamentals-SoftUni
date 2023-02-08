function aMinerTask(input) {

    let resourcesAndQuantities = new Map();
    let inputL = input.length;

    for (let i = 0; i < inputL; i += 2) {
        let resource = input[i]; //взимам всеки четен индекс, който отговаря на продукта
        let quantity = Number(input[i + 1]); //взимам всеки нечетен индекс, който отговаря на количеството 
        // проверявам в мап-а има ли търсения продукт
        if (resourcesAndQuantities.has(resource)) {
            //взимаме продукта и връщаме неговата стойност
            let totalQuantity = resourcesAndQuantities.get(resource);
            //ако търсения продукт съществува, то към взетата стойност, добави новата стойност
            resourcesAndQuantities.set(resource, Number(totalQuantity) + Number(quantity));
        } else {
            //ако липсва търсения продукт, то в мап-а добави продукта и количеството
            resourcesAndQuantities.set(resource, Number(quantity));
        }
    }
    //отпечатване на резултата
    let rez = Array.from(resourcesAndQuantities);
    for (let [resource, quantity] of rez) {
        console.log(`${resource} -> ${quantity}`);
    }
}

aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);