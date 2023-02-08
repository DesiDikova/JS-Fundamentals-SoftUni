function personInfo(firstName, lastName, age) {

    /*ПЪРВИ ВАРИАНТ
    динамично попълвам пропъртитата на обекта с дадените стойности
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age,
    };

    return(person);

    */

    /* ВТОРИ ВАРИАНТ
    създавам празен обект 
    let person = {};

    започвам да запълвам обекта с необходимите ключ и стойност 
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = Number(age);

    return(person);
    */

    /* ТРЕТИ ВАРИАНТ
съкратен запис - ключа и стойността идват от външна променлива; 
ключът и името на променливата са с едни и същи имена 
ключът взима стойността от променливата
    let person = {
        firstName,
        lastName,
        age,
    };

    return(person);
    */
}

console.log(personInfo("Peter", "Pan", "20"));
//personInfo("George", "Smith", "18");