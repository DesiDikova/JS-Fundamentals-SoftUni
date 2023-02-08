
// 1 flour, 10 eggs, 1 apron

function cooking(arr) {

    let budget = arr[0];
    let students = arr[1];
    let flourPrice = arr[2];
    let eggPrice = arr[3];
    let arponPrice = arr[4];

    // console.log(budget, students, flourPrice, eggPrice, arponPrice)

    // flour, 10 eggs, arpon


                    // prestilki                    brashno                                         qica
    let result = (students + (Math.ceil(students*0.20)))*arponPrice+ (students - (Math.floor(students/5)))*flourPrice + students*10*eggPrice 
    

    if (result > budget) {
        console.log(`${(Math.abs(budget - result)).toFixed(2)}$ more needed.`)
    } else {
        console.log(`Items purchased for ${result.toFixed(2)}$.`)
    }
}

cooking([50, 20, 1.0, 0.10, 10.0])
        