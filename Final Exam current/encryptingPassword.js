function encryptingPassword(input) {

    //Паролата е валидна, когато:
    //• Започва с група от символи и завършва с едни и същи символи (една и съща дължина)
    //- Всички символи са възможни 
    //• Има > след първата група и < преди последната 
    //• Между знака за по-голямо от и знака за по-малко от там са четири групи (всяка от три знака),
    //разделени с черта (" I ") 
    //o Първата група се състои само от числа 
    //o Втората група—само от малки букеи 
    //o Третата—само от големи букви
    //o Четвъртата — всички символи с изключение на "<" и ">"

    let countPassword = Number(input.shift());
    let pattern = /(.+)\>(?<number>\d{3})\|(?<lowerCase>[a-z]{3})\|(?<upperCase>[A-Z]{3})\|(?<symbol>[^<>]{3})\<\1/gm;

    for (let i = 0; i < countPassword; i++) {
        let currentPassword = input[i];
        let match = pattern.exec(currentPassword);

        if (match !== null) {

            let number = match.groups['number'];
            let lowerCase = match.groups['lowerCase'];
            let upperCase = match.groups['upperCase'];
            let symbol = match.groups['symbol'];
            let encryptedPassword = number + lowerCase + upperCase + symbol;

            console.log(`Password: ${encryptedPassword}`)
        } else {
            console.log(`Try another password!`);
        }
    }
}

//encryptingPassword(["3", "##>00|no|NO|!!!?<###", "##>123|yes|YES|!!!<##", "$$<111|noo|NOPE|<<>$$"]);
encryptingPassword(["5", "aa>111|mqu|BAU|mqu<aa", "()>111!aaa!AAA!^&*<()", "o>088|abc|AAA|***<o", "asd>asd|asd|ASD|asd<asd", "*>088|zzzz|ZzZ|123<*"]);


//...............

// function encryptingPassword(input) {
//     const numberOfInputs = Number(input.shift());
//     const n = Number(input.shift());
//     const pattern = /(.+)>(?<numbers>\d{3})\|(?<lowers>[a-z]{3})\|(?<uppers>[A-Z]{3})\|(?<allSymbols>[^<>]{3})<\1/;
  
//     for (const elem of input) {
//       const validPassword = pattern.exec(elem);
//     for (let i = 0; i < n; i++) {
//       const validPassword = pattern.exec(input[i]);
  
//       if (!validPassword) {
//         console.log('Try another password!');
//         continue;
//       }
//       const {numbers, lowers, uppers, allSymbols} = validPassword.groups;
//       const encryptedPassword = numbers + lowers + uppers + allSymbols;
//       console.log(`Password: ${encryptedPassword}`);
//     }
//   }
// }