function vacation(groupPeople, typeGroup, day) {
    let price = 0;

    switch (typeGroup) {
        case 'Students':
            if (day === 'Friday') price = groupPeople * 8.45;
            else if (day === 'Saturday') price = groupPeople * 9.80;
            else if (day === 'Sunday') price = groupPeople * 10.46;
            if (groupPeople >= 30) price *= 0.85;
            break;
        case 'Business':
            if (groupPeople >= 100) groupPeople -= 10;
            if (day === 'Friday') price = groupPeople * 10.90;
            else if (day === 'Saturday') price = groupPeople * 15.60;
            else if (day === 'Sunday') price = groupPeople * 16;
            break;
        case 'Regular':
            if (day === 'Friday') price = groupPeople * 15;
            else if (day === 'Saturday') price = groupPeople * 20;
            else if (day === 'Sunday') price = groupPeople * 22.50;
            if (groupPeople >= 10 && groupPeople <= 20) price *= 0.95;
            break;
    }

    console.log(`Total price: ${price.toFixed(2)}`)
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
vacation(110, "Business", "Sunday");
