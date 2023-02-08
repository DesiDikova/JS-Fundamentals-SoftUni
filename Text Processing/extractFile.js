function extractFile(input) {
    
    let array = input.split('\\'); //превръщам стринга в масив
    let nameFile = array.pop().split('.'); //изрязвам последния елемент и превръщам стринга в масив
    let extensionFile = nameFile.pop(); //изрязвам последния елемент
    
    console.log(`File name: ${nameFile.join('.')}`);
    console.log(`File extension: ${extensionFile}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');