function chessBoard(num) {
    let sizeBoard = +num;
    let color = 'black';
    let otherColor = '';
    console.log('<div class="chessboard">')

    for (let rows = 1; rows <= sizeBoard; rows++) {
        console.log('  <div>')
 
        for (let columns = 1; columns <= sizeBoard; columns++) {
            console.log(`    <span class="${color}"></span>`);
 
            otherColor = color
            color = otherColor === 'black' ? 'white' : 'black'
        }
 
        console.log('  </div>')
        if (sizeBoard % 2 === 0) {
            otherColor = color
            color = otherColor === 'black' ? 'white' : 'black'
        }
    }
 
    console.log('</div>')
}

chessBoard(3);