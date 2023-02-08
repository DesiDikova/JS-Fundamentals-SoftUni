function city(cityInfo) {
    
    //цикъл, в който ще взимам ключът и на база ключ - ще взимам съответната стойност
    for (let key of Object.keys(cityInfo)) {
         console.log(`${key} -> ${cityInfo[key]}`);  
    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});
// city({
//     name: "Plovdiv",
//     area: 389,
//     population: 1162358,
//     country: "Bulgaria",
//     postCode: "4000"
// });