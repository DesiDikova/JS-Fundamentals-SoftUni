function cats(catsOfArray) {

    //създавам class Cat
    class Cat {
        constructor(catName, age) {
            this.catName = catName;
            this.age = age;
        }

        //създавам метод "Мяу"
        meow() {
            console.log(`${this.catName}, age ${this.age} says Meow`);
        }
    }

    //с помощта на цикъл взимам името на котката и нейната възраст
    for (let catOfArray of catsOfArray) {
        [catName, age] = catOfArray.split(' ');
        catName = catName;
        age = Number(age);

        //създавам нова котка с подадените параметри
        let cat = new Cat(catName, age);

        //викам метода 'meow'
        cat.meow();
    }
}


//cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);