function arr(arr) {

    let movies = []
    
    for (let command of arr) {
        if (command.includes('addMovie')) {
            let name = command.replace('addMovie ', '');
            //let name = command.split('addMovie ')[1]; // 'Addmove Car' ['', 'Car']
            movies.push({name: name});
        } else if (command.includes('directedBy')) {
            let [nameMovie, nameDirector] = command.split(' directedBy ');
            for (let movie of movies) {
                if (movie.name === nameMovie) {
                    movie.director = nameDirector;
                }
            }
        } else if (command.includes('onDate')) {
            let [nameMovie, date] = command.split(' onDate ') 
            for (let movie of movies) {
                if (movie.name === nameMovie) {
                    movie.date = date;
                }
            }
        }
    }

    for (let movie of movies) {
        if (movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        } 
    }
}

arr([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);