function cutAndReverse(input) {

    let array = input
        .split('')
        .reverse()
        .join('');

        //разрязва стринга наполовина и обръща двете половини
    let arrayOne = array.slice(0, array.length / 2);
    let arrayTwo = array.slice(array.length / 2);

    console.log(arrayTwo);
    console.log(arrayOne);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');

