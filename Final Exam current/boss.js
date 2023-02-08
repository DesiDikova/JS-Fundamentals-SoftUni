function boss(input) {

    let numberString = Number(input.shift());
    let pattern = /\|(?<name>[A-Z]{4,})\|\:\#(?<string>[A-z]+\s{1}[A-z]+)\#/gm;
    let match = pattern.exec(input);

    while (match !== null) {

        let name = match.groups['name'];
        let string = match.groups['string'];
        let strength = name.length;
        let armor = string.length;

        console.log(`${name} , The ${string}`);
        console.log(`>> Strength: ${strength}`);
        console.log(`>> Armor: ${armor}`);

        match = pattern.exec(input);
    } 
    console.log(`Access denied!`)
}

boss([
    "3",
    "|PETER|:#Lead architect#",
    "|GEORGE|:#High Overseer#",
    "|ALEX|:#Assistant Game Developer#",
]);
// boss([
//     "3",
//     "|STEFAN|:#H1gh Overseer#",
//     "|IVAN|:#Master detective#",
//     "|KARL|: #Marketing lead#",
// ]);




// function boss(input) {
//     const inputCount = Number(input.shift());
//     const pattern =
//         /[|](?<bossName>[A-Z]{4,})[|][:][#](?<title>[A-z]+\s{1}[A-z]+)[#]/g;

//     for (const hero of input) {
//         let boss = hero.match(pattern);
//         let match = pattern.exec(boss);
//         if (!match) {
//             console.log("Access denied!");
//         }
//         while (match) {
//             console.log(`${match.groups.bossName}, The ${match.groups.title}`);
//             console.log(`>> Strength: ${match.groups.bossName.length}`);
//             console.log(`>> Armor: ${match.groups.title.length}`);
//             match = pattern.exec(boss);
//             break;
//         }
//     }
// }
// boss([
//     "3",
//     "|PETER|:#Lead architect#",
//     "|GEORGE|:#High Overseer#",
//     "|ALEX|:#Assistant Game Developer#",
// ]);
// console.log("********");
// boss([
//     "3",
//     "|STEFAN|:#H1gh Overseer#",
//     "|IVAN|:#Master detective#",
//     "|KARL|: #Marketing lead#",
// ]);