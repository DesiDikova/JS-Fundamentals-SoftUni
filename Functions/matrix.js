// function matrix(num) {

//     for (let i = 0; i < num; i++) {
//         let output = ''; 
//         for (let j = 0; j < num; j++) {
//             output += `${num} `; 
//         }
//         console.log(output)
//     }
// }

// matrix(3);
// matrix(7);
// matrix(2);


function matrix(num) {

    function getRows(numbers) {
        let output = '';
        for (let i = 0; i < numbers; i++) {
            output += `${numbers} `;
        }
        return output;
    }
    for (let i = 0; i < num; i++) {
        console.log(getRows(num));
    }
}

matrix(3);
//matrix(7);
// matrix(2);