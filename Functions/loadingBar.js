function loadingBar(num) {

    let string = '';
    let currentNum = num / 10;

    if (currentNum === 10) {
        console.log(`${num}% Complete!`);
        console.log('[%%%%%%%%%%]');
        return;
    }
    for (let i = 0; i < currentNum; i++) {
        string += '%';
    }

    for (let j = currentNum; j < 10; j++) {
        string += '.';
    }

    console.log(`${num}% [${string}]`);
    console.log('Still loading...');
}

loadingBar(30);
loadingBar(50);
loadingBar(100);