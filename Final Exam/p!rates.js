function pirates(array) {

    let indexSail = array.indexOf('Sail'); //търся на кой индекс  се намира 'Sail'
    let townObj = {};

    for (let i = 0; i < indexSail; i++) {
        let [town, people, gold] = array[i].split('||');
        people = Number(people);
        gold = Number(gold);

        //ако в обекта НЕ се съдържа името на града - към него добави ключ със стойност people, и ключ със стойност gold
        if (!townObj.hasOwnProperty(town)) {
            townObj[town] = {
                people,
                gold
            };
            //ако в обекта се съдържа името на града, то към ключ people и неговата стойност, добави новата стойност    
        } else {
            townObj[town].people += people;
            townObj[town].gold += gold;
        }
    }

    let arrayL = array.length;
    for (let i = indexSail + 1; i < arrayL; i++) {
        let tokens = array[i].split('=>');
        let command = tokens[0];
        let town = tokens[1];

        if (command === 'Plunder') {
            let people = Number(tokens[2]);
            let gold = Number(tokens[3]);
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            townObj[town].people -= people;
            townObj[town].gold -= gold;
            //ако хората или златото са равни на 0 - Градът е изтрит от картата!
            if (townObj[town].people === 0 || townObj[town].gold === 0) {
                delete townObj[town];
                console.log(`${town} has been wiped off the map!`);
            }
        }

        if (command === 'Prosper') {
            let addedGold = Number(tokens[2]);
            //ако количеството злато е отрицателно число
            if (addedGold < 0) {
                console.log(`Gold added cannot be a negative number!`);

                //ако количеството злато е положително число - добавете го към хазната на града
            } else {
                let totalGold = townObj[town].gold += addedGold;
                console.log(`${addedGold} gold added to the city treasury. ${town} now has ${totalGold} gold.`);
            }
        }

        //ако командата е 'End' и дължината на масива townObject е по - голяма от 0

        if (command === 'End') {

            let townObject = Object.entries(townObj);
            let townObjectL = townObject.length;

            if (townObjectL > 0) {
                console.log(`Ahoy, Captain! There are ${townObjectL} wealthy settlements to go to:`);

                for (let key of townObject) {
                    console.log(`${key[0]} -> Population: ${key[1].people} citizens, Gold: ${key[1].gold} kg`);
                }
            } else {
                console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
            }
        }
    }
}

pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]);

// pirates(["Nassau||95000||1000",
//     "San Juan||930000||1250",
//     "Campeche||270000||690",
//     "Port Royal||320000||1000",
//     "Port Royal||100000||2000",
//     "Sail",
//     "Prosper=>Port Royal=>-200",
//     "Plunder=>Nassau=>94000=>750",
//     "Plunder=>Nassau=>1000=>150",
//     "Plunder=>Campeche=>150000=>690",
//     "End"]);
