function rightPlace(stringFurst, symbol, stringSecond) {
    let result = stringFurst.replace('_', symbol);
    let output = result === stringSecond ? "Matched" : "Not Matched";
    console.log(output);
}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');