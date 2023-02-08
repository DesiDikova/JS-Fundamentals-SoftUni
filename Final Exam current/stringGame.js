function stringGame(input) {

    let string = input.shift();

    for (let element of input) {
        let [command, firstComand, secondComand] = element.split(' ');

        //Заменете всички срещания на char с дадената замяна, след което отпечатайте низа.
        if (command === 'Change') {
            let char = Number(firstComand);
            let replacement = secondComand;

            string = string.split(char).join(replacement)
            console.log(string);
        }

        //Проверете дали низът включва дадения подниз и отпечатайте „True“ или „False“
        if (command === 'Includes') {
            let substring = firstComand;

            if (string.includes(substring)) {
                console.log(`True`);
            } else {
                console.log(`False`);
            }
        }

        //Проверете дали низът завършва с дадения подниз и отпечатайте "True" или "False"
        if (command === 'End') {
            let substring = firstComand;

            if (string.endsWith(substring)) {
                console.log(`True`);
            } else {
                console.log(`False`);
            }
        }

        //Направете целия низ с главни букви, след което го отпечатайте
        if (command === 'Uppercase') {
            string = string.toUpperCase();
            console.log(string);
        }

        //Намерете индекса на първото срещане на дадения char, след което го отпечатайте
        if (command === 'FindIndex') {
            let char = firstComand;
            let findChar = string.indexOf(char);
            console.log(findChar);
        }

        //Премахнете всички знаци от низа, с изключение на тези, започващи от дадения начален индекс 
        //и следващия брой знаци. Отпечатайте резултата без изрязаните знаци.
        if (command === 'Cut') {
            let startIndex = Number(firstComand);
            let count = Number(secondComand);

            let deleted = string.slice(startIndex, count + startIndex);
            console.log(deleted);
        }
    }
}

// stringGame([
//     "//Th1s 1s my str1ng!//",
//     "Change 1 i",
//     "Includes string",
//     "End my",
//     "Uppercase",
//     "FindIndex I",
//     "Cut 5 5",
//     "Done"
// ]);
stringGame([
    "*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"
]);


//...............

// function stringGame(input) {
//     let text = input.shift();
  
//     function change(str, char, replacement) {
//       const regex = new RegExp(char, 'g');
//       str = str.replace(regex, replacement);
//       console.log(str);
//       return str;
//     }
  
//     function includes(str, substring) {
//       let message = '';
  
//       if (str.includes(substring)) {
//         message = 'True';
//       } else {
//         message = 'False';
//       } 
  
//       console.log(message);
//     } 
  
//     function end(str, substring) {
//       let message = '';
  
//       if (str.endsWith(substring)) {
//         message = 'True';
//       } else {
//         message = 'False';
//       } 
  
//       console.log(message);
//     }
  
//     function uppercase(str) {
//       str = str.toUpperCase();
//       console.log(str);
//       return str;
//     } 
  
//     function findIndex(str, char) {
//       const firstOccurrence = str.indexOf(char);
//       console.log(firstOccurrence);
//     }
  
//     function cut(str, startIndex, count) {
//       str = str.slice(startIndex, startIndex + count);
//       console.log(str);
//       return str;
//     }
  
//     for (const elem of input) {
//       if (elem === 'Done') break;
  
//       const [command, ...rest] = elem.split(' ');
  
//       switch (command) {
//         case 'Change':
//           const charToChange = rest[0];
//           const replacement = rest[1];
//           text = change(text, charToChange, replacement);
//           break;
//         case 'Includes':
//           const substring = rest[0];
//           includes(text, substring);
//           break;
//         case 'End':
//           const substr = rest[0];
//           end(text, substr);
//           break;
//         case 'Uppercase':
//           text = uppercase(text);
//           break;
//         case 'FindIndex':
//           const charToFind = rest[0];
//           findIndex(text, charToFind);
//           break;
//         case 'Cut':
//           const startIndex = Number(rest[0]);
//           const count = Number(rest[1]);
//           text = cut(text, startIndex, count);
//           break;
//         default:
//           console.log('No such command!');
//           continue;
//       }
//     }
//   }
