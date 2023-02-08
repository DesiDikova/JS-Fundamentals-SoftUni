function phoneBook(array) {
    
    let personNameAndPhone = {}; //създавам празен обект
    for (let elem of array) {
        let [name, phone] = elem.split(' '); //създавам отделни масиви, в които взимам name и phone
        personNameAndPhone[name] = phone; //динамично запълвам обекта с ключ 'name' и стойност 'phone'
    }

    //for-in цикъл, който обикаля обекта - взимам всеки ключ и неговата стойност 
    for (let personName in personNameAndPhone) {
        console.log(`${personName} -> ${personNameAndPhone[personName]}`);
    }
}

phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);
//phoneBook(['George 0552554', 'Peter 087587', 'George 0453112', 'Bill 0845344']);