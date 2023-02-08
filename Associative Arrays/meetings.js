function meetings(arrayData) {

    let objDataMeetings = {};

    for (let elem of arrayData) {
        let [weekday, personName] = elem.split(' '); //създавам отделни масиви с данни за weekday и personName    

        //проверявам дали ключът 'weekday' се съдържа в обекта
        if (objDataMeetings.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`)
        } else {
            objDataMeetings[weekday] = personName; //динамично запълвам обекта с ключ 'weekday' и стойност 'personName'
            console.log(`Scheduled for ${weekday}`);
        }
    }

    //фор-ин цикъл, в който взимам всеки ключ и неговата стойност от обекта
    for (let key in objDataMeetings) {
        console.log(`${key} -> ${objDataMeetings[key]}`);
    }
}

meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);
//meetings(['Friday Bob', 'Saturday Ted', 'Monday Bill', 'Monday John', 'Wednesday George']);