function degustationParty(input) {

    end = input.pop();
    let food = {};
    let dislikedMeals = 0;

    for (let element of input) {
        let [command, guest, meal] = element.split('-');

        //Ако гостът не съществува, добавете него и ястието му към списъка. 
        if (command === 'Like') {
            if (!food.hasOwnProperty(guest)) {
                food[guest] = [];
            }

            //Aко гостът вече има ястието в колекцията си, не го добавяйте.
            if (food[guest].includes(meal)) {
                continue;
            }

            food[guest].push(meal);
        }

        //Премахнете ястието от колекцията от харесани ястия на госта
        if (command === 'Dislike') {

            //Ако гостът не съществува
            if (!food.hasOwnProperty(guest)) {
                console.log(`${guest} is not at the party.`);
                continue;
            }

            //Ако гостът няма ястие в списъка за харесване
            if (!food[guest].includes(meal)) {
                console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
                continue;
            }

            //Премахнете ястието от колекцията от харесани ястия на госта            
            if (food[guest].includes(meal)) {
                let index = food[guest].indexOf(meal);
                let deleted = food[guest].splice(index, 1);
                dislikedMeals++;

                console.log(`${guest} doesn't like the ${deleted}.`);
            }
        }
    }

    let newObjFoods = Object.entries(food);

    for (let element of newObjFoods) {
        let guest = element[0];
        let meal = element[1].join(', ');

        console.log(`${guest}: ${meal}`);
    }

    console.log(`Unliked meals: ${dislikedMeals}`);
}

degustationParty([
    "Like-Krisi-shrimps",
    "Like-Krisi-soup",
    "Like-Penelope-dessert",
    "Like-Misho-salad",
    "Stop"
]);
degustationParty([
    "Like-Krisi-shrimps",
    "Dislike-Vili-carp",
    "Dislike-Krisi-salad",
    "Stop"
]);
degustationParty([
    "Like-Katy-fish",
    "Dislike-Katy-fish",
    "Stop"
]);