function tseamAccount(array) {

    let arrayL = array.length;
    let firstArray = array[0].split(' ');

    for (let i = 1; i < arrayL; i++) {
        let secondArray = array[i].split(' ');
        let command = secondArray[0];
        let game = secondArray[1];
        if (command === 'Play!') {
            //когато стигнем командата 'Play!' - прекъсваме цикъла
            break;
        } else if (command === 'Install' && firstArray.includes(game) === false) {
            //добавя играта, ако не е инсталирана още
            firstArray.push(game);
        } else if (command === 'Uninstall' && firstArray.includes(game) === true) {
            //изтриваме играта, ако съществува
            game.splice(i, 1);
        } else if (command === 'Update' && firstArray.includes(game) === true) {
            //актуализираме играта, ако съществува и я поставяме на последна позиция
            firstArray.push(game);
        } else if (command === 'Expansion') {
            //TODO
        }
    }

}



tseamAccount([
    'CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'
]);
// tseamAccount([
//     'CS WoW Diablo',
//     'Uninstall XCOM',
//     'Update PeshoGame',
//     'Update WoW',
//     'Expansion Civ-V',
//     'Play!'
// ]);