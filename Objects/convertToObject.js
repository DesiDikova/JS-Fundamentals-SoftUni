function convertToObject(objToString) {
    
    //обръщам стринга в обект
    let obj = JSON.parse(objToString);

    //цикъл, в който ще взема всеки ключ и на негова база - ще взема съответната стойност
    for (let key of Object.keys(obj)) {
        console.log(`${key}: ${obj[key]}`)
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
//convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');