var valorInScreen = document.querySelector(".content-screen");
    
class Inputs {
    input1: number = 0;
    input2: number = 0;
}

const valors = new Inputs();

let arrayValors: string[] = [];
let valorRemovedFromArray: string = '';

function numberSelected(numberSelected: string) {
    this.arrayValors.push(numberSelected);
    this.valorRemovedFromArray = this.arrayValors.join("");

    if (valors.input1 == 0) {
        this.valorInScreen.innerHTML = this.valorRemovedFromArray
    } else {
        this.valorInScreen.innerHTML = valors.input1 + '   ' + this.sinal + '   ' + this.valorRemovedFromArray;
    }
}

let sinal: string = '';

function operations(sinalSelected: string) {
    valors.input2 = 0;

    if (valors.input1 == 0) {
        valors.input1 = Number(this.valorRemovedFromArray);
    }

    this.sinal = sinalSelected;
    this.valorInScreen.innerHTML = valors.input1 + '  ' + this.sinal;
    this.valuesReset();
}

class Calculator {
    Sum(valors: Inputs): number {
        const resultSum = valors.input1 + valors.input2;  

        return parseFloat(resultSum.toFixed(2));
    }

    Subtraction(valors: Inputs): number { 
        const resultSubtraction = valors.input1 - valors.input2; 

        return parseFloat(resultSubtraction.toFixed(2));
    }

    Multiplication(valors: Inputs): number {
        const resultMultiplication = valors.input1 * valors.input2; 

        return parseFloat(resultMultiplication.toFixed(2));
    }

    Division(valors: Inputs): number {
        const resultDivision = valors.input1 / valors.input2;

        return parseFloat(resultDivision.toFixed(2));
    }
}

const calculator = new Calculator();

function result() {
    if (valors.input2 == 0) {
        valors.input2 = Number(this.valorRemovedFromArray);
    }

    if (this.sinal === '+') { 
        this.valorInScreen.innerHTML = calculator.Sum(valors);
        valors.input1 = calculator.Sum(valors);
    } else if (this.sinal === '-') {
        this.valorInScreen.innerHTML = calculator.Subtraction(valors);
        valors.input1 = calculator.Subtraction(valors);
    } else if (this.sinal === '*') {
        this.valorInScreen.innerHTML = calculator.Multiplication(valors);
        valors.input1 = calculator.Multiplication(valors);
    } else if (this.sinal === '/') {
        this.valorInScreen.innerHTML = calculator.Division(valors);
        valors.input1 = calculator.Division(valors);
    } else {
        alert("[ERROR !]: no operation signal has been entered");
    }

    this.resetInputsAndSinal();
    this.valuesReset();
}

function valuesReset() {
    this.arrayValors = [];
}

function resetInputsAndSinal(): Inputs {
    valors.input2 = 0;

    this.sinal = '';

    return valors;
}

function toCleanScreenContent() {
    valors.input1 = 0;

    this.resetInputsAndSinal();
    this.valuesReset();
    this.valorInScreen.innerHTML = '';
    this.valorRemovedFromArray = '';    
}