function nextDay(year, month, day) {
        let nextDate = new Date(year, month - 1, day + 1);
        let newDay = nextDate.getDate();
        let newMonth = nextDate.getMonth() + 1;
        let newYear = nextDate.getFullYear();
        console.log(`${newYear}-${newMonth}-${newDay}`);
    }

nextDay(2016, 9, 30);
nextDay(2020, 3, 24);

// let nextDay = new Date(year, month - 1, day + 1);
//         let newYear = nextDay.getFullYear();
//         let newMonth = nextDay.getMonth() + 1;
//         let newDate = nextDay.getDate();
//         console.log(`${newYear}-${newMonth}-${newDate`);