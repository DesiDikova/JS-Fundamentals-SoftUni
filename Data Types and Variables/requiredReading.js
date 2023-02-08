function requiredReading(numPages, pagesReadInOneHour, numDay) {
    let hoursForDay = numPages / numDay / pagesReadInOneHour;
    console.log(hoursForDay);
}

requiredReading(212, 20 , 2);
requiredReading(432, 15 , 4);