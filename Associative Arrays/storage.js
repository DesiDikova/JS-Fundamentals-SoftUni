function storage(arrayProducts) {
    
    let myMap = new Map(); // създавам мап

    for (let elem of arrayProducts) {
        let [product, quantity] = elem.split(' '); //чрез split правя отделни масиви и взимам продукта и количеството 
        
        if (myMap.has(product)) { // проверявам в мап-а има ли търсения продукт
            let totalQuantity = myMap.get(product); //взимаме продукта и връщаме неговата стойност
            myMap.set(product, Number(totalQuantity) + Number(quantity)); //ако търсения продукт съществува, то към взетата стойност, добави новата стойност
        } else {
            myMap.set(product, Number(quantity)); //ако липсва търсения продукт, то в мап-а добави продукта и количеството
        }
    }
    //цикъл, в който взимам ключа и стойността
    for (let [key, values] of myMap) {
        console.log(`${key} -> ${values}`);
    }
}

storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);
//storage(['apple 50', 'apple 61', 'coffee 115', 'coffee 40']);