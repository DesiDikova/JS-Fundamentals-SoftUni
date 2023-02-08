function destinationMapper(input) {

    // Валидно местоположение е:
    // • Заобиколен от "=" или "/" от двете страни 
    // • След първото "=" или "/" трябва да има само букви 
    // (първата трябва да е главна, останалите букви могат да бъдат главни или малки)
    // • Буквите трябва да са поне 3

    let pattern = /(\/|={1})([A-Z][a-zA-Z]{2,})\1/gm;

    let match = pattern.exec(input);
    let destination = [];
    let totalPoints = 0;

    while (match !== null) {

        //взимам дестинацията
        let location = match[2];
        destination.push(location);
        
        //изчислявам точките
        let points = location.length;
        totalPoints += points;

        match = pattern.exec(input);
    }
    
    console.log(`Destinations: ${destination.join(', ')}`);
    console.log(`Travel Points: ${totalPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");