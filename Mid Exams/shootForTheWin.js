function shootForTheWin(array) {

    let sequence = array
        .shift()
        .split(' ')
        .map(Number);

    array.pop();
    let shotTargets = array.map(Number);
    let sequenceL = sequence.length;
    let shotTargetsL = shotTargets.length;
    let countOfShotTargets = 0;

    for (let i = 0; i < shotTargetsL; i++) {
        let targets = shotTargets[i];
        let shot = sequence[targets];

        if (shot > -1) {
            sequence[targets] = -1;
            countOfShotTargets++;

            for (let j = 0; j < sequenceL; j++) {
                if (sequence[j] > -1) {
                    if (sequence[j] > shot) {
                        sequence[j] -= shot;
                    } else if (sequence[j] <= shot) {
                        sequence[j] += shot;
                    }
                }
            }
        }
    }

    console.log(`Shot targets: ${countOfShotTargets} -> ${sequence.join(' ')}`);
}

shootForTheWin([
    "24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"
]);

shootForTheWin([
    "30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"
]);

