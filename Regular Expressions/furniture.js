function furniture(input) {

    let array = input.join(' ');
    let arrayFurniture = [];
    let totalSum = 0;
    let pattern = /[>]{2}(?<furniture>[A-Z][A-z]+)[<]{2}(?<price>[\d.]+)!(?<quantity>\d+)/gm;
    let match = pattern.exec(array);

    while (match !== null) {

        let furniture = match.groups['furniture'];
        let price = Number(match.groups['price']);
        let quantity = Number(match.groups['quantity']);

        arrayFurniture.push(furniture);
        totalSum += price * quantity;

        match = pattern.exec(array);
    }

    console.log(`Bought furniture:`);
    arrayFurniture.forEach(element => console.log(element));

    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);
// furniture([
//     '>>Laptop<<312.2323!3',
//     '>>TV<<300.21314!5',
//     '>Invalid<<!5',
//     '>>TV<<300.21314!20',
//     '>>Invalid<!5',
//     '>>TV<<30.21314!5',
//     '>>Invalid<<!!5',
//     'Purchase']);
// furniture([
//     '>Invalid<<!4',
//     '>Invalid<<!2',
//     '>Invalid<<!5',
//     'Purchase']);