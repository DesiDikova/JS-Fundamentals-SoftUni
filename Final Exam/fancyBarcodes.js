function fancyBarcodes(input) {

    //Баркодът е валиден, когато:
    //• Заобиколен е от "@", последван от един или повече "#"
    //• Дължината е най-малко 6 знака (без околните "@" или "#")
    //• Започва с главна буква
    //• Съдържа само букви (малки и главни) и цифри
    //• Завършва с главна буква

    let numBarkodes = Number(input.shift());
    let pattern = /(@#{1,})([A-Z][A-Za-z0-9]{4,}[A-Z])(@#{1,})/g;

    for (let i = 0; i < numBarkodes; i++) {
        let barkode = input[i];

        let match = pattern.exec(barkode);
        let digits = '';
        let isValid = false;

        while (match !== null) {
            let validBarkod = match[2];
            //ако мачнем баркова - значи имаме валиден баркод
            isValid = true;

            for (let char of validBarkod) {
                //казваме, че всеки char от validBarkod се преобразува в число, за да проверим - в баркода съдържа ли се число
                let charCode = char.charCodeAt(0);

                //търсим: има ли цифра в баркода? Ако има, нека цифрата се конкатенира към digits - а
                if (charCode >= 48 && charCode <= 57) {
                    digits += char;
                }               
            }

            match = pattern.exec(barkode);
        }

        //ако баркодър е валиден 
        if (isValid) {
            //и дължината на digits-а е по-голяма от 0 - отпечатваме продуктовите групи (конкатенацията на числата)
            if (digits.length > 0) {
                console.log(`Product group: ${digits}`);
            //ако digits-a е по-малък или равен на 0, нека да отпечатаме за продуктова група 00    
            } else if (digits.length <= 0) {
                console.log(`Product group: 00`);
            } 
        //ако баркодът е невалиден
        } else {
            console.log(`Invalid barcode`);
        }  
    }
}

// fancyBarcodes([
//     "3",
//     "@#FreshFisH@#",
//     "@###Brea0D@###",
//     "@##Che4s6E@##"
// ]);
fancyBarcodes([
    "6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"
]);

