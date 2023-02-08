function softUniBarIncome(input) {

    //Името на клиентa - заобиколено от '%', започва с главна, след това малки букви
    //Продуктът съдържа всяка дума, заобиколен е от '<' и '>'
    //Броят е цяло число, оградено с '|'
    //Цената е число, последвано от '$'
    //Между всяка част може да има други символи, с изключение на ('|', '$', '%' и '.')

    let name = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>[\w]+)>[^|$%.]*\|(?<count>[\d]+)\|[^|$%.]*?(?<price>[\d]+(.[\d]+)?)?\$/g;
    let totalSum = 0;

    for (let currentElement of input) {

        if (currentElement === 'end of shift') {
            break;
        }

        let match = name.exec(input);
        let sum = 0;

        sum = Number(match.groups.count) * Number(match.groups.price);
        totalSum += sum;

        console.log(`${match.groups.name}: ${match.groups.product} - ${sum.toFixed(2)}`);
    }

    console.log(`Total income: ${totalSum.toFixed(2)}`);
}

// softUniBarIncome([
//     '%George%<Croissant>|2|10.3$',
//     '%Peter%<Gum>|1|1.3$',
//     '%Maria%<Cola>|1|2.4$',
//     'end of shift'
// ]);
softUniBarIncome([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
]);