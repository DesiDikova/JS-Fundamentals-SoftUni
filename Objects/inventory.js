function inventory(arrayWithDataAllHeros) {

    let arrayWithDataAllHerosL = arrayWithDataAllHeros.length;
    let arrInfoHero = [];

    //цикъл, в който ще вземем стринговете heroName, heroLevel, items и ще ги превърнем в масив, чрез split
    for (let i = 0; i < arrayWithDataAllHerosL; i++) {
        let [heroName, heroLevel, items] = arrayWithDataAllHeros[i].split(' / ');
        heroLevel = Number(heroLevel);
        //създавам обект със стойност равна на ключа
        let infoHero = {
            heroName,
            heroLevel,
            items,
        };

        //за да сортирам heroLevel, обекта, трябва да го превърна в масив, поради тази причина използвам нов масив и push
        arrInfoHero.push(infoHero);
    }

    //взимам heroLevel във възходящ ред
    let sortHeroLevel = arrInfoHero.sort((a, b) => a.heroLevel - b.heroLevel);

    // цикъл, в който ще въртя по масива, за да взема всички необходими стойности
    for (let hero of sortHeroLevel) {
        console.log(`Hero: ${hero.heroName}\nlevel => ${hero.heroLevel}\nitems => ${hero.items}`);
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
// inventory([
//     'Batman / 2 / Banana, Gun',
//     'Superman / 18 / Sword',
//     'Poppy / 28 / Sentinel, Antara'
//     ]);