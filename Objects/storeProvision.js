// function storeProvision(currentStock, productsForDelivery) {

//     let currentStockL = currentStock.length;
//     let productsForDeliveryL = productsForDelivery.length;
//     let productStore = {}

//     for (let i = 0; i < currentStockL; i += 2) {
//         let product = currentStock[i];
//         let quantity = Number(currentStock[i + 1]);
//         productStore[product] = quantity;
//     }

//     for (let i = 0; i < productsForDeliveryL; i += 2) {
//         let product = productsForDelivery[i];
//         if (!productStore.hasOwnProperty(product)) {
//             productStore[product] = 0;
//         }
//         productStore[product] += Number(productsForDelivery[i + 1]);
//     }

//     for (let product in productStore) {
//         console.log(`${product} -> ${productStore[product]}`)
//     }
// }

// storeProvision
//     (['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
//         ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
// storeProvision
// (['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
//     ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);


function storeProvision(currentStock, forDelivery) {

    let currentStockL = currentStock.length;
    let orderedForDeliveryL = forDelivery.length;
    let storeProducts = {};

    //цикъл за първия масив
    for (let i = 0; i < currentStockL; i += 2) {
        let product = currentStock[i]; //взимам всеки четен индекс, който отговаря на продукта
        let quantity = Number(currentStock[i + 1]); //взимам всеки нечетен индекс, който отговаря на количеството
        storeProducts[product] = quantity; //запълвам обекта с наличните продукти и количества  
    }

    //цикъл за втория масив
    for (let i = 0; i < orderedForDeliveryL; i += 2) {
        let product = forDelivery[i]; //взимам всеки четен индекс, който отговаря на продукта

        //ако не се съдържа ключа в обекта
        if (!storeProducts.hasOwnProperty(product)) {
            storeProducts[product] = 0; // нека количеството е = 0
        }
        //ако ли НЕ - нека към количеството от първия масив се добави количеството от втория масив
        storeProducts[product] += Number(forDelivery[i + 1]); 
    }

    //цикъл, в който да вземем всеки ключ и неговата стойност, и да отпечатаме резултата
    for (let product in storeProducts) {
        console.log(`${product} -> ${storeProducts[product]}`);    
    }
}


storeProvision
    (['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
        ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
// storeProvision
// (['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
//     ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);



