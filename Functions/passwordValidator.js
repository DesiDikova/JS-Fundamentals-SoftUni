function passwordValidator(pass) {

    //проверяваме дали паролата има между 6 и 10 символа
    function isLengthBetweenSixAndTen(string) {
        if (string.length >= 6 && string.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    //проверяваме в паролата дали има само букви и цифри
    function isConsistOnlyOfLettersAndDigits(string) {
        for (let char of string) {
            let charCode = char.charCodeAt(0);
            if (!(charCode >= 48 && charCode <= 57) &&
                !(charCode >= 65 && charCode <= 90) &&
                !(charCode >= 97 && charCode <= 122)) {
                return false;
            }
        }
        return true;
    }

    //проверяваме в паролата дали има две или повече числа
    function isLeastTwoDigits(string) {
        let count = 0;
        for (let digit of string) {
            let digitCode = digit.charCodeAt(0);
            if (digitCode >= 48 && digitCode <= 57) {
                count++;
            }
        }
        if (count >= 2) {
            return true;
        } else {
            return false;
        }
    }

    let isLengthSixAndTen = isLengthBetweenSixAndTen(pass);
    let isConsistOfLettersAndDigits = isConsistOnlyOfLettersAndDigits(pass);
    let isTwoDigits = isLeastTwoDigits(pass);

    //отпечатваме резултата
    if (isLengthSixAndTen && isConsistOfLettersAndDigits && isTwoDigits) {
        console.log(`Password is valid`);
    }
    if (!isLengthSixAndTen) {
        console.log(`Password must be between 6 and 10 characters`);
    }
    if (!isConsistOfLettersAndDigits) {
        console.log(`Password must consist only of letters and digits`);
    }
    if (!isTwoDigits) {
        console.log(`Password must have at least 2 digits`);
    }
}
passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');