// function orders(product, quantity) {

//     //взимаме цената на продукта
//     let price = 0;
//     switch (product) {
//         case 'coffee':
//             price = 1.50;
//             break;
//         case 'water':
//             price = 1.00;
//         break;
//     case 'coke':
//         price = 1.40;
//         break;
//     case 'snacks':
//         price = 2.00;
//         break;
// }

//      //калкулираме крайната цена
//     let totalPrice = price * quantity;
//     //принтираме резултата
//     console.log(totalPrice.toFixed(2));
// }

// orders("water", 5);
// orders("coffee", 2);


function orders(product, quantity) {

    //взимаме цената на продукта
    let price = getProduct(product);
    function getProduct(product) {
        switch (product) {
            case 'coffee':
                return 1.50;
            case 'water':
                return 1.00;
            case 'coke':
                return 1.40;
            case 'snacks':
                return 2.00;
        }
    }

    //калкулираме крайната цена
    let totalPrice = price * quantity;
    //принтираме резултата
    console.log(totalPrice.toFixed(2));
}

orders("water", 5);
orders("coffee", 2);