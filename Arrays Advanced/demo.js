// function demo(arr) {
//     let newArr = [];

//     if(arr.length % 2 !== 0){

//        arr.push(0)

//     }

//     for(let i = 0; i < arr.length; i+=2){

//         let sum = arr[i] + arr[i + 1]

//         newArr.push(sum)

//     }

//     arr = newArr
//     console.log(arr)

// }

// demo([1, 2, 4, 5, 6, 7, 8]);


// let str = 'addMovie Fast and Furious'

// str = str.replace('addMovie', '')
// console.log(str)
// console.log("!")

// function createHuman(arr) {

//      let humans = []

//     for (let command of arr) {
//         command = command.split(' ')
//         let objHuman = {name: command[0], age:command[1]}
//         humans.push(objHuman)
//     }

//     console.log(humans)

// }

// createHuman(['Ivan 13', 'Iva 14', 'Ivo 10'])




function companyUsers(input) {
    let companies = {};
    for (const elem of input) {
        let [company, id] = elem.split(' -> ');
        if (!companies.hasOwnProperty(company)) {
            companies[company] = [];
        }
        companies[company].push(id);
    }
    let sorted = Object.entries(companies);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    for (let elem of sorted) {
        console.log(elem[0]);
        let set = new Set(elem[1]);
        for (let number of set) {
            console.log(`-- ${number}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);