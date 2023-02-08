function easterEggs(input) {
    //Цвят на яйцата: 
    //Оградени с един или повече "@" или "#" (не е задължително да са същото). 
    //Пише се само с малки азбучни букви. 
    //Всеки цвят трябва да съдържа минимум 3 букви. 
    
    //Количество: 
    //Винаги позиционирано след цвета. 
    //Между цвета и сумата може или не може да има други знаци. 
    //Ако има, те НЕ трябва да са азбучни букви или цифри. 
    //Заобиколен от едно или повече "/". 
    //Съдържа само цифри.

    let text = input[0];
    let pattern = /[@#]{1,}(?<color>[a-z]{3,})[@#]{1,}[*#\/%^&@$]{1,}(?<count>[0-9]+)\/{1,}/gm;
    let match = pattern.exec(text);

    while (match !== null) {
        
        let count = match[2]
        let color = match[1];
         
        console.log(`You found ${count} ${color} eggs!`);

        match = pattern.exec(text);
    }
}

easterEggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);
easterEggs(['#@##@red@#/8/@rEd@/2/#@purple@////10/']);
