//complex closure

function divideBy(firstNumber, secondNumber){
    dev = secondNumber / firstNumber;
    return dev;
}

function addBy(firstNumber, secondNumber){
    sum = firstNumber + secondNumber;
    return sum;
}

const addBy100 = divideBy(100);
const addBy1000 = addBy(1000);
const divideByBy10 = divideBy(10);
const divideByBy100 = divideBy(100);