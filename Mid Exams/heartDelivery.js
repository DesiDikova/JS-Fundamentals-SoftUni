function heartDelivery(array) {

    let neighborhood = array.shift().split('@').map(Number);

    let countCupidon = 0;

    while (array[0] !== 'Love!') {
        let jump = array.shift().split(' ');
        let currentJump = Number(jump[1]);
        countCupidon += currentJump;

        if (countCupidon >= neighborhood.length) {
            countCupidon = 0;
        }

        if (neighborhood[countCupidon] === 0) {
            console.log(`Place ${countCupidon} already had Valentine's day.`);
        } else {
            neighborhood[countCupidon] -= 2;
            if (neighborhood[countCupidon] === 0) {
                console.log(`Place ${countCupidon} has Valentine's day.`)
            }
        }
    }

    let didNotCelebrate = 0;
    for (let house of neighborhood) {
        if (house > 0) {
            didNotCelebrate++;
        }
    }

    console.log(`Cupid's last position was ${countCupidon}.`);

    if (didNotCelebrate > 0) {
        console.log(`Cupid has failed ${didNotCelebrate} places.`);
    } else {
        console.log(`Mission was successful.`);
    }
}

//heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
heartDelivery(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"]);
//heartDelivery(["4@2@4@2", "Jump 1", "Jump 2", "Jump 1", "Jump 2", "Jump 2", "Jump 2", "Love!"]);
