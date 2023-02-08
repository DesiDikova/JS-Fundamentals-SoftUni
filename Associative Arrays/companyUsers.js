function companyUsers(arrayOfStrings) {

    let company = {};

    //взимам името на компанията и служителите
    for (let command of arrayOfStrings) {
        let [companyName, employees] = command.split(' -> ');
        //ако фирмата НЕ се съдържа в обекта - добави към фирмата празен масив, 
        //в който ще събирам чрез командата concat служителите от ляво и отдясно 
        if (!company[companyName]) {
            company[companyName] = [];
        }

        company[companyName] = company[companyName].concat(employees);

    }

    //сортирам фирмите по възходящ ред
    let sort = Object.entries(company).sort((a, b) => a[0].localeCompare(b[0]));

    //отпечатване на резултата
    for (let [nameCompany, employees] of sort) {
        console.table(nameCompany);
        //чрез set правя колекция от уникални стойности
        let set = new Set(employees);
        for (let employee of set) {
            console.log(`-- ${employee}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);

// много си усложняваш живота колега, 1-во можеш да проверяваш в дадената компания - дали имаш вече такъв работник:

// if (!companyPeople[companyName].Contains)