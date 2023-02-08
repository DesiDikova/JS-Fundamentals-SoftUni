function sortAnArrayByTwoCriteria(array) {
    
    //сортираме масива по два критерия: Първият основния - по дължина, втория - по азбучен ред
    let sortArray = array
        .sort((a, b) => a.length - b.length || a.localeCompare(b))
        .join('\n');

    console.log(sortArray);
}

//sortAnArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
sortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);