function heroesOfCodeAndLogicVII(array) {

    let numberHeroes = Number(array.shift());
    let endArray = array.pop();
    let heroes = {};

    for (let i = 0; i < numberHeroes; i++) {
        let [nameHero, hP, mP] = array[i].split(' ');
        hP = Number(hP);
        mP = Number(mP);
        //hP може да бъде максимум 100;
        if (hP > 100) {
            hP = 100;
        }
        //mP може да бъде максимум 200;
        if (mP > 200) {
            mP = 200;
        }

        heroes[nameHero] = { hP, mP };
    }

    array = array.splice(numberHeroes); //изрязвам броя герои с техните данни

    for (let element of array) {
        let [command, nameHero, sum, firstCommand] = element.split(' - ');
        sum = Number(sum);

        //при команда - 'Heal', увеличавам hP, но не може да надвишава 100
        if (command === 'Heal') {
            heroes[nameHero].hP += sum;
            if (heroes[nameHero].hP > 100) {
                let remainder = heroes[nameHero].hP - 100;
                let refueled = sum - remainder;
                heroes[nameHero].hP = 100;

                console.log(`${nameHero} healed for ${refueled} HP!`);
                continue;
            }
            console.log(`${nameHero} healed for ${sum} HP!`);
        }

        //при команда - 'Recharge', увеличавам mP, но не може да надвишава 200
        if (command === 'Recharge') {
            heroes[nameHero].mP += sum;
            if (heroes[nameHero].mP > 200) {
                let remainder = heroes[nameHero].mP - 200;
                let refueled = sum - remainder;
                heroes[nameHero].mP = 200;

                console.log(`${nameHero} recharged for ${refueled} MP!`);
                continue;
            }
            console.log(`${nameHero} recharged for ${sum} MP!`);
        }

        //при команда - 'TakeDamage', намалям сумата на hP
        if (command === 'TakeDamage') {
            heroes[nameHero].hP -= sum;

            //ако героят е жив
            if (heroes[nameHero].hP > 0) {
                console.log(`${nameHero} was hit for ${sum} HP by ${firstCommand} and now has ${heroes[nameHero].hP} HP left!`);
            } else { //ако е загинал
                delete heroes[nameHero];
                console.log(`${nameHero} has been killed by ${firstCommand}!`);
            }
        }

        //при команда - 'CastSpell'
        if (command === 'CastSpell') {
            //ако има необходимото mP - прави заклинанието и намаля своя mP
            if (heroes[nameHero].mP >= sum) {
                heroes[nameHero].mP -= sum;
                console.log(`${nameHero} has successfully cast ${firstCommand} and now has ${heroes[nameHero].mP} MP!`);
            } else { //ако не може да направи заклинанието
                console.log(`${nameHero} does not have enough MP to cast ${firstCommand}!`);
            }

        }
    }

    let heroesObj = Object.entries(heroes);

    for (let element of heroesObj) {
        let nameHero = element[0];
        let hP = element[1].hP;
        let mP = element[1].mP;

        console.table(`${nameHero}\n  HP: ${hP}\n  MP: ${mP}`);
    }
}

heroesOfCodeAndLogicVII([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End',
]);
// heroesOfCodeAndLogicVII([
//     '4',
//     'Adela 90 150',
//     'SirMullich 70 40',
//     'Ivor 1 111',
//     'Tyris 94 61',
//     'Heal - SirMullich - 50',
//     'Recharge - Adela - 100',
//     'CastSpell - Tyris - 1000 - Fireball',
//     'TakeDamage - Tyris - 99 - Fireball',
//     'TakeDamage - Ivor - 3 - Mosquito',
//     'End',
// ]);