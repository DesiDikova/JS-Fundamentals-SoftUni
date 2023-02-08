function listOfProducts(products) {

    //подреждане на продуктите по азбучен ред
    let productFromAToZ = products.sort();

    //взимаме дължината на масива
    let productFromAToZL = productFromAToZ.length;

    //цикъл, за да вземем всеки текущ продукт от масива със съответната номерация
    for (let i = 0; i < productFromAToZL; i++) {
        let currentProduct = productFromAToZ[i];

        //отпечатване на резултата
        console.log(`${i+1}.${currentProduct}`);   
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts(['Watermelon', 'Banana', 'Apples']);