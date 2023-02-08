function convertToJSON(name, lastName, hairColor) {
    
    //създавам обект със зададените ключ и стойност
    let person = {
        name,
        lastName,
        hairColor,
    };

    //превръщам обекта в стринг с помощта на JSON
    let personToString = JSON.stringify(person);

    console.log(personToString);
}

convertToJSON('George', 'Jones', 'Brown');
//convertToJSON('Peter', 'Smith', 'Blond');