function schoolGrades(array) {

    let objStudentsAndGrades = {};

    for (let line of array) {
        let tokens = line.split(' '); //превръщам входа на отделни масиви
        let nameStudent = tokens.shift(); //изрязвам първият елемент (nameStident)
        let gradesStudent = tokens.map(Number); //превръщам данните в оставащия масив в числа

        if (!objStudentsAndGrades[nameStudent]) { //ако не се съдържа името на студента в обекта, то тогава
            objStudentsAndGrades[nameStudent] = []; //създай празен масив
        }

        let hasStudent = objStudentsAndGrades[nameStudent]; // добавям в масива името на съществуващия студент

        for (let grade of gradesStudent) { //цикъл, в който ще добавяме оценките в новия масив 
            hasStudent.push(grade);
        }
    }

    //взимам ентритата на обекта и го сортирам по localeCompare
    let sortStudent = Object.entries(objStudentsAndGrades).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, grades] of sortStudent) { //цикъл, в който взимам името и оценката от сортирания масив
        let avrGrades = 0;
        for (let grade of grades) {
            avrGrades += grade; //изчислявам сумата на всички оценки
        }

        //изчислявам, средната оценка и отпечатвам резултата
        avrGrades = avrGrades / grades.length;
        console.log(`${name}: ${avrGrades.toFixed(2)}`); 
    }
}

schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);
schoolGrades(['Steven 3 5 6 4', 'George 4 6', 'Tammy 2 5 3', 'Steven 6 3']);