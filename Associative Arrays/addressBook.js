function addressBook(arrayData) {

    let objNameAndAddress = {}; //създавам празен обект

    for (let elem of arrayData) {
        let [name, address] = elem.split(':'); //създавам отделни масиви с инф-я, отностно името и адреса
        objNameAndAddress[name] = address; //динамично добавям на обекта ключ(name) и стойност(address)
    }

    //сортирам ключовете в обект във възходящ ред, с помощта на entries(връща масив от елементи или матрица)
    let sortObjNameAndAddress = Object.entries(objNameAndAddress).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));
    
    for (let [key, value] of sortObjNameAndAddress) {
        console.log(`${key} -> ${value}`)
    }  
}

addressBook([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);
// addressBook([
//     'Bob:Huxley Rd',
//     'John:Milwaukee Crossing',
//     'Peter:Fordem Ave',
//     'Bob:Redwing Ave',
//     'George:Mesta Crossing',
//     'Ted:Gateway Way',
//     'Bill:Gateway Way',
//     'John:Grover Rd',
//     'Peter:Huxley Rd',
//     'Jeff:Gateway Way',
//     'Jeff:Huxley Rd']);