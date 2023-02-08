// function plantDiscovery(input) {

//     let numberPlants = input.shift(); //взимам броя растения
//     let plantsExhibition = {};

//     //цикъл, който ще завъртя до броя растения и ще взема име на растението и рядкостта му 
//     for (let i = 0; i < numberPlants; i++) {
//         let [namePlant, rarity] = input[i].split('<->');
//         rarity = Number(rarity);

//         //всяко име в обекта е равно на обект, в който ще съхранявам ключ rarity и ключ rating, 
//         //за който ще създам масив, в който ще съхранявам стойностите за всeки рейтинг
//         plantsExhibition[namePlant] = { rarity, rating: [] };

//         //ако съществува растението - то нека да се актуализира неговия рейтинг
//         if (plantsExhibition.hasOwnProperty(namePlant)) {
//             plantsExhibition[namePlant].rarity = rarity;
//         }
//     }

//     let inputL = input.length;
//     for (let i = numberPlants; i < inputL; i++) {
//         let element = input[i].split(': ');
//         let command = element[0];

//         //ако командата е равна на 'Exhibition' - цикълът нека да спре
//         if (command === 'Exhibition') {
//             break;
//         }
//         //ако командата е равна на 'Rate' - достъпвам rating на обекта и пушвам в него стойността на рейтинга
//         if (command === 'Rate') {
//             let [namePlant, rarity] = element[1].split(' - ');
//             rarity = Number(rarity);
//             if (plantsExhibition.hasOwnProperty(namePlant)) {
//                 plantsExhibition[namePlant].rating.push(rarity);
//             } else {
//                 console.log('error');
//             }
//         }

//         //ако командата е равна на 'Update' и растението се среща в обекта - rarity е равен на newRarity
//         if (command === 'Update') {
//             let [namePlant, rarity] = element[1].split(' - ');
//             rarity = Number(rarity);
//             let newRarity = rarity;
//             if (plantsExhibition.hasOwnProperty(namePlant)) {
//                 plantsExhibition[namePlant].rarity = newRarity;

//             } else {
//                 console.log('error');
//             }
//         }

//         //ако командата е равна на 'Reset' и името на растението се среща в обекта - 
//         //то стойността ключ reating, нека бъде равна на празен масив
//         if (command === 'Reset') {
//             let namePlant = element[1].split(' - ');
//             if (plantsExhibition.hasOwnProperty(namePlant)) {
//                 plantsExhibition[namePlant].rating = [];
//             } else {
//                 console.log('error');
//             }
//         }
//     }

//     console.log('Plants for the exhibition:');

//     //превръщам обекта в отделни масиви
//     let plantsExhibitionObj = Object.entries(plantsExhibition);

//     for (let key of plantsExhibitionObj) {
//         let average = 0;
//         let namePlant = key[0];
//         let rarity = key[1].rarity;
//         let rating = key[1].rating;
//         let ratingL = rating.length;

//         //събирам всички стойности в масива
//         if (ratingL > 0) {
//             let avrgSum = rating.reduce((a, b) => a + b);
//             average = avrgSum / ratingL;
//         }

//         average = average;

//         console.log(`- ${namePlant}; Rarity: ${rarity}; Rating: ${average.toFixed(2)}`);
//     }
// }

// plantDiscovery([
//     "4",
//     "Arnoldii<->4",
//     "Woodii<->7",
//     "Woodii<->5",
//     "Welwitschia<->2",
//     "Rate: Woodii - 10",
//     "Rate: Welwitschia - 7",
//     "Rate: Arnoldii - 3",
//     "Rate: Woodii - 5",
//     "Update: Woodii - 5",
//     "Reset: Arnoldii",
//     "Exhibition"]);
// plantDiscovery([
//     "2",
//     "Candelabra<->10",
//     "Oahu<->10",
//     "Rate: Oahu - 7",
//     "Rate: Candelabra - 6",
//     "Exhibition"]);


            //REFACTORING
function plantDiscovery(input) {

    let numberPlants = input.shift(); //взимам броя растения
    let plantsExhibition = {};

    //цикъл, който ще завъртя до броя растения и ще взема име на растението и рядкостта му 
    for (let i = 0; i < numberPlants; i++) {
        let [namePlant, rarity] = input[i].split('<->');
        rarity = Number(rarity);

        //всяко име в обекта е равно на обект, в който ще съхранявам ключ rarity и ключ rating, 
        //за който ще създам масив, в който ще съхранявам стойностите за всeки рейтинг
        plantsExhibition[namePlant] = { rarity, rating: [] };

        //ако съществува растението - то нека да се актуализира неговия рейтинг
        if (plantsExhibition.hasOwnProperty(namePlant)) {
            plantsExhibition[namePlant].rarity = rarity;
        }
    }

    let inputL = input.length;
    for (let i = numberPlants; i < inputL; i++) {
        let element = input[i].split(': ');
        let command = element[0];

        //ако командата е равна на 'Exhibition' - цикълът нека да спре
        if (command === 'Exhibition') {
            break;
        }

        let [namePlant, rarity] = element[1].split(' - ');
        rarity = Number(rarity);

        if (plantsExhibition.hasOwnProperty(namePlant)) {

            //ако командата е равна на 'Rate' - достъпвам rating на обекта и пушвам в него стойността на рейтинга
            if (command === 'Rate') {
                plantsExhibition[namePlant].rating.push(rarity);
            }

            //ако командата е равна на 'Update' и растението се среща в обекта - rarity е равен на newRarity
            if (command === 'Update') {
                let newRarity = rarity;
                plantsExhibition[namePlant].rarity = newRarity;
            }

            //ако командата е равна на 'Reset' и името на растението се среща в обекта - 
            //то стойността ключ reating, нека бъде равна на празен масив
            if (command === 'Reset') {
                plantsExhibition[namePlant].rating = [];
            }
        } else {
            console.log('error');
        }
    }

    console.log('Plants for the exhibition:');

    //превръщам обекта в отделни масиви
    let plantsExhibitionObj = Object.entries(plantsExhibition);

    for (let key of plantsExhibitionObj) {
        let average = 0;
        let namePlant = key[0];
        let rarity = key[1].rarity;
        let rating = key[1].rating;
        let ratingL = rating.length;

        //събирам всички стойности в масива
        if (ratingL > 0) {
            let avrgSum = rating.reduce((a, b) => a + b);
            average = avrgSum / ratingL;
        }

        average = average;

        console.log(`- ${namePlant}; Rarity: ${rarity}; Rating: ${average.toFixed(2)}`);
    }
}

plantDiscovery([
    "3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);
// plantDiscovery([
//     "2",
//     "Candelabra<->10",
//     "Oahu<->10",
//     "Rate: Oahu - 7",
//     "Rate: Candelabra - 6",
//     "Exhibition"]);
