function towns(array) {

    //създавам цикъл, в който ще взимам всеки елемент
    for (let elem of array) {
        let [town, latitude, longitude] = elem.split(' | '); //превръщам стринга в масив
        //създавам обект, който ще приема town, latitude и longitude
        let townInfo = {
            town: town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        };

        console.log(townInfo);
    }  
}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
//towns(['Plovdiv | 136.45 | 812.575']);