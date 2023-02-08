function matchDates(input) {

    //Валидна дата;
    //Винаги започва с две цифри, последвани от разделител;
    //След това има една главна и две малки букви (напр. Ян, Мар);
    //След това има разделител и точно 4 цифри (за годината);
    //Разделителят може да бъде едно от три неща: точка ("."), тире ("-") или наклонена черта ("/");
    //Разделителят трябва да е един и същ за цялата дата.

    let pattern = /\b(?<day>\d{2})([-./])(?<month>[A-Z]{1}[a-z]{2})\2(?<year>\d{4})\b/g;

    let match = pattern.exec(input);

    while (match !== null) {

        let day = match.groups['day'];
        let month = match.groups['month'];
        let year = match.groups['year'];

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);

        match = pattern.exec(input);
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);
matchDates(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014']);