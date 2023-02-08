function dungeonestDark(array) {

    let health = 100;
    let coins = 0;
    let currentHealth = 0;
    let room = 0;

    let arrStringArr = array.toString().split('|');

    for (let element of arrStringArr) {
        let [command, number] = element.split(' ');
        number = Number(number);
        room++;
        
        if (command === 'chest') { //монети
            coins += number;
            console.log(`You found ${number} coins.`); //печатам монетите, които съм намерил 
        } else if (command === 'potion') { //здраве
            currentHealth = health; //90
            health += number; //лекувам се с числото
            if (health > 100) { //моето здраве не може да надвишава първоначалната си стойност, а именно 100.
                health = 100;
                number = 100 - currentHealth;
            }
            console.log(`You healed for ${number} hp.`); //печатам стойността, с която съм се излекувал
            console.log(`Current health: ${health} hp.`); //печатам моето текущо здраве

        } else { //чудовище
            health -= number; //бия се с чудовището и моето здраве намалява
            if (health > 0) { //ако здравето ми е по-голямо от '0' - аз съм жив
                console.log(`You slayed ${command}.`); //печатам името на чудовището, с което се бия

            } else { //мъртав съм
                console.log(`You died! Killed by ${command}.`); //печатам името на чудовището, което ме е убило и цикъла прекъсва
                console.log(`Best room: ${room}`);
                return;
            }
        }
    }
        //ако успея да премина през всички стаи 
    console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`)
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
//dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);