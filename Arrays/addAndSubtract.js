function addAndSubtract(arr) {
    let array = arr;
    let arrayL = array.length;
    let newArray = [];
    let sumArray = 0;
    let sumNewArray = 0;

    for (let i = 0; i < arrayL; i++) {
        let elem = array[i];
        sumArray += elem;
        if (elem % 2 === 0) {
            elem += i;
        } else {
            elem -= i;
        }
        newArray.push(elem);
        sumNewArray += elem;
    }
    console.log(newArray);
    console.log(sumArray);
    console.log(sumNewArray);
}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);