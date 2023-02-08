//......ТРЯБВА ДА Я ДОВЪРША

function messagesManager(input) {

    let capacity = input.shift();
    let end = input.pop();
    let obj = {};

    for (let element of input) {
        let tokens = element.split('=');
        let command = tokens[0];

        //Добавете потребителското име, неговите/нейните изпратени и получени съобщения към вашите записи. 
        //Ако човек с даденото потребителско име вече съществува, игнорирайте реда.
        if (command === 'Add') {
            let userName = tokens[1];
            let sent = Number(tokens[2]);
            let received = Number(tokens[3]);

            if (!obj.hasOwnProperty(userName)) {
                obj[userName] = { sent, received };
            } else {
                continue;
            }

            // obj[userName].sent.push(sent);
            // obj[userName].received.push(received);
        }

        if (command === 'Message') {
            let sender = tokens[1];
            let receiver = tokens[2];

            //Проверете дали съществуват и двете потребителски имена и ако съществуват, 
            //увеличете изпратените съобщения на подателя с 1 и получените съобщения на получателя с 1. 
            if (obj.hasOwnProperty(sender) && obj.hasOwnProperty(receiver)) {
                obj[sender].sent += 1;
                obj[receiver].received += 1;

                //Ако някой достигне капацитета (първо проверете подателя), той/тя трябва да бъде премахнат от записа 
                if (obj[sender].sent >= capacity) {
                    delete obj[sender];
                    console.log(`${sender} reached the capacity!`);
                }

                if (obj[receiver].received >= capacity) {
                    delete obj[receiver];
                    console.log(`${receiver} reached the capacity!`);
                }
            }
        }

        //Изтрийте всички записи на дадения потребител, ако съществува. 
        //Ако като потребителско име е дадено "All" изтрийте всички записи, които имате.
        if (command === 'Empty') {
            let userName = tokens[1];
            if (obj.hasOwnProperty(userName)) {
                delete obj[userName];
            }

            // if (userName === 'All') {
            //     delete obj;
            // }
        }
    }

    
}

// messagesManager([
//     '10',
//     'Add=Mark=5=4',
//     'Add=Clark=3=5',
//     'Add=Berg=9=0',
//     'Add=Kevin=0=0',
//     'Message=Berg=Kevin',
//     'Statistics',
// ]);
// messagesManager([
//     '20',
//     'Add=Mark=3=9',
//     'Add=Berry=5=5',
//     'Add=Clark=4=0',
//     'Empty=Berry',
//     'Add=Blake=9=3',
//     'Add=Michael=3=9',
//     'Add=Amy=9=9',
//     'Message=Blake=Amy',
//     'Message=Michael=Amy',
//     'Statistics'
// ]);
messagesManager([
    '12',
    'Add=Bonnie=3=5',
    'Add=Johny=4=4',
    'Empty=All',
    'Add=Bonnie=3=3',
    'Statistics'
]);