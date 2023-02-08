function signCheck(a, b, c) {

    let result;

    if (a < 0 && b < 0 || a > 0 && b > 0) {
        if (c < 0) {
            result = 'Negative';
        } else if (c > 0) {
            result = 'Positive';
        }
    } else {
        if (c < 0) {
            result = 'Positive';
        } else {
            result = 'Negative';
        }
    } 

    console.log(result);
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);
