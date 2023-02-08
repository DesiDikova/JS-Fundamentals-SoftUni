function employees(arr) {

    for (let name of arr) {
        console.log(`Name: ${name} -- Personal Number: ${name.length}`)

    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
