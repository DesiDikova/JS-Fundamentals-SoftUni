function computerStore(array) {

    let arrayL = array.length;
    let pricesWithoutTax = 0;
    let taxes = 0;
    let totalPrice = 0;
    let command;

    for (let i = 0; i < arrayL; i++) {
        command = array[i];
        if (command === 'special' || command === 'regular') {
            break;
        }
        if (Number(array[i]) < 0) {
            console.log(`Invalid price!`);
        } else {
            pricesWithoutTax += Number(array[i]);
        }
    }
    
    taxes = pricesWithoutTax * 0.20;
    totalPrice = pricesWithoutTax + taxes;
    if (command === 'special') {
        totalPrice *= 0.90;
    }
    if (totalPrice === 0) {
        console.log(`Invalid order!`);
        return;
    }

        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${pricesWithoutTax.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
}

computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special']);
computerStore(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular']);
computerStore(['regular']);

