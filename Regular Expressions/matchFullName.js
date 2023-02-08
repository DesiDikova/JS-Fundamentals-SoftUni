function matchFullName(input) {

    //взимаме цялото име, което се състои от две думи; 
    //всяка дума започва с главна буква; 
    //след първата буква се съдържат само малки букви; 
    //всяка от двете думи трябва да е дълга поне две букви; 
    //двете думи са разделени с интервал.

    let pattern = /\b[A-Z][a-z]{1,} [A-Z][a-z]+/g
    let match = pattern.exec(input);
    let array = [];

    while(match !== null) {
        array.push(match[0]);

        match = pattern.exec(input);
    }   

    console.log(array.join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan   Ivanov");

