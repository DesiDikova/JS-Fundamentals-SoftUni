function repeatString(str, n) {
    
    let rez = '';

    for (let i = 0; i < n; i++) {
        rez += str;
    }
    
    console.log(rez);
}

repeatString('abc', 3);
repeatString('String', 2);